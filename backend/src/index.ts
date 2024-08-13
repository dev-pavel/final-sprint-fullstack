import mongoose from 'mongoose';
import express, {Request, Response, NextFunction} from 'express';
import {getVacanciesFromMongoDb, getVacanciesFromPostgreSQL} from "./services/getVacancies";
import {parseSalaryRange} from "./helpers/parseSalaryRange";
import cors from 'cors';
import client from "./helpers/postgresql";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'test_jwt'

client.connect()
    .then(() => console.log('PostgreSQL Connected!'));

mongoose.connect('mongodb://127.0.0.1:27017/full-stack-final')
    .then(() => console.log('MongoDB Connected!'));

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({userId: user.id}, JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    } else {
        res.status(401).send('Invalid credentials');
    }
});

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get('/', authenticateJWT, async (req, res) => {
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