import Vacancy from "../schemas/vacacy";
import {FilterQuery} from "mongoose";
import client from "../helpers/postgresql";

type SearchOptions = {
    jobType: string[];
    salaryRanges: [number, number][];
    category: string[];
    search: string;
};

export const getVacanciesFromMongoDb = async (options: SearchOptions) => {
    const {jobType, salaryRanges, category, search} = options;
    const query: FilterQuery<any> = {};

    if (jobType.length) {
        query.jobType = {$in: jobType};
    }
    if (category.length) {
        query.jobCategory = {$in: category};
    }
    if (salaryRanges.length) {
        query.$or = salaryRanges.map(([min, max]) => ({
            minSalary: {$gte: min},
            maxSalary: {$lte: max}
        }));
    }
    if (search) {
        query.$or = [
            {title: {$regex: search, $options: 'i'}},
            {description: {$regex: search, $options: 'i'}},
            {company: {$regex: search, $options: 'i'}},
            {location: {$regex: search, $options: 'i'}},
        ];
    }

    return Vacancy.find(query);
};

export const getVacanciesFromPostgreSQL = async (options: SearchOptions) => {
    const {jobType, salaryRanges, category, search} = options;
    const conditions: string[] = [];
    const values: any[] = [];

    if (jobType.length) {
        conditions.push(`jobType = ANY($${values.length + 1})`);
        values.push(jobType);
    }

    if (category.length) {
        conditions.push(`jobCategory = ANY($${values.length + 1})`);
        values.push(category);
    }

    if (salaryRanges.length) {
        const salaryConditions = salaryRanges.map(
            ([min, max], index) => `(minSalary >= $${values.length + index * 2 + 1} AND maxSalary <= $${values.length + index * 2 + 2})`
        ).join(' OR ');
        conditions.push(`(${salaryConditions})`);
        salaryRanges.forEach(([min, max]) => {
            values.push(min, max);
        });
    }

    if (search) {
        conditions.push(`(
        title ILIKE $${values.length + 1} OR
        description ILIKE $${values.length + 1} OR
        company ILIKE $${values.length + 1} OR
        location ILIKE $${values.length + 1}
    )`);
        values.push(`%${search}%`);
    }

    const query = `
    SELECT * FROM vacancies
    ${conditions.length ? 'WHERE ' + conditions.join(' AND ') : ''}
    `;


    const result = await client.query(query, values);
    return Array.from(result.rows).map((raw: any) => ({
        _id: raw.id,
        title: raw.title,
        jobType: raw.jobtype,
        company: raw.company,
        location: raw.location,
        description: raw.description,
        minSalary: raw.minsalary,
        maxSalary: raw.maxsalary,
        jobCategory: raw.jobcategory
    }));
};