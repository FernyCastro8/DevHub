import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const JobsSchema = new Schema({
    company: {
        type: String,
        required: true,
        unique: true
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
    position: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true // This will add createdAt and updatedAt fields

    })

// Creating the model
const Jobs = mongoose.model('jobs', JobsSchema);

export default Jobs;