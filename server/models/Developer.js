import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const developerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },

})


const Developer = mongoose.model('developer', developerSchema);

export default Developer;