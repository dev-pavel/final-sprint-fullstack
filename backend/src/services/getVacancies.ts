import Vacancy from "../schemas/vacacy";
import {FilterQuery} from "mongoose";

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

export const getVacanciesFromPostgreSQL = (options: SearchOptions) => {
    const {jobType, salaryRanges, category, search} = options;
    const salaryConditions = salaryRanges.map(
        ([min, max], index) => `(min_salary >= $${index * 2 + 2} AND max_salary <= $${index * 2 + 3})`
    ).join(' OR ');

    const query = `
        SELECT * FROM vacancies
        WHERE job_type = ANY($1)
        AND (${salaryConditions})
        AND category = ANY($${salaryRanges.length * 2 + 2})
        AND (
            title ILIKE $${salaryRanges.length * 2 + 3}
            OR description ILIKE $${salaryRanges.length * 2 + 3}
            OR company ILIKE $${salaryRanges.length * 2 + 3}
            OR location ILIKE $${salaryRanges.length * 2 + 3}
        )
    `;

    const values = [
        jobType,
        ...salaryRanges.flat(),
        category,
        `%${search}%`
    ];

    // return client.query(query, values)
    //     .then(res => res.rows)
    //     .catch(err => console.error(err));
};