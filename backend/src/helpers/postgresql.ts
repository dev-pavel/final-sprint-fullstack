import pg from "pg";

const {Client} = pg
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'final-sprint-fullstack',
    user: 'postgres',
    password: '1849'
})

export default client