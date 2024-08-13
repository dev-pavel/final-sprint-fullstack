import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Vacancy = new Schema({
    title: String,
    jobType: String,
    company: String,
    location: String,
    description: String,
    minSalary: Number,
    maxSalary: Number,
});

export default mongoose.model('Vacancy', Vacancy);