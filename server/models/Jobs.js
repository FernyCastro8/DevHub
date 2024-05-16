import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const JobsSchema = new Schema({
    company: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    jobname: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    descrition: {
        type: String,
        require: true
    },
    employmentType: {
        type: String,
        required: true
    },
},
    {
        timestamps: true // This will add createdAt and updatedAt fields

    });

// Creating the Jobs model
const Jobs = mongoose.model('jobs', JobsSchema);

export default Jobs;