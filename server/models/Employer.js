import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const EmployerSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, // date
        hidden: Boolean
    },

})
