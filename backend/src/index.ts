import mongoose from 'mongoose';
import express from 'express';
import pg from 'pg'
import {getVacanciesFromMongoDb} from "./services/getVacancies";
import {parseSalaryRange} from "./helpers/parseSalaryRange";
import cors from 'cors';

const {Client} = pg
const client = new Client()

// client.connect()
//     .then(() => console.log('PostgreSQL Connected!'));

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
    const vacancies = await getVacanciesFromMongoDb(options);
    res.send(vacancies)
});

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})