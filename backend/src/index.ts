import mongoose from 'mongoose';
import express from 'express';
import {getVacanciesFromMongoDb, getVacanciesFromPostgreSQL} from "./services/getVacancies";
import {parseSalaryRange} from "./helpers/parseSalaryRange";
import cors from 'cors';
import client from "./helpers/postgresql";

client.connect()
    .then(() => console.log('PostgreSQL Connected!'));

mongoose.connect('mongodb://127.0.0.1:27017/full-stack-final')
    .then(() => console.log('MongoDB Connected!'));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const options = {
        jobType: (req.query.jobType as string || '').split(',').filter(Boolean),
        salaryRanges: parseSalaryRange(req.query.salaryRange as string || ''),
        category: (req.query.category as string || '').split(',').filter(Boolean),
        search: req.query.search as string || ''
    }
    const database = req.query.database as string || 'mongo';
    let vacancies

    switch (database) {
        case 'mongo':
            vacancies = await getVacanciesFromMongoDb(options);
            break;
        case 'postgresql':
            vacancies = await getVacanciesFromPostgreSQL(options);
            break;
        case 'both':
            vacancies = await getVacanciesFromPostgreSQL(options);
            vacancies = [...vacancies, ...(await getVacanciesFromMongoDb(options))];
            break;
    }

    res.send(vacancies)
});

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})