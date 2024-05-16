import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const developerSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    occupation: {
        type: String,
        required: true
    },
    educationlevel: {
        type: string,
        required: true,
    },
    skill: {
        type: String,
        requied: true
    }

},
    {
        timestamps: true // This will add createdAt and updatedAt fields

    });

// Creating the Developer model
const Developer = mongoose.model('developer', developerSchema);

export default Developer;