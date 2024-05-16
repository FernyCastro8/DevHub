const mongoose = require('mongoose');
const { Schema } = require('mongoose');


// Funtion to validate email
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// // Test the validateEmail function
// const testEmail = "test@example.com";
// const isValidEmail = validateEmail(testEmail);

// console.log(`Email: ${testEmail}, Valid: ${isValidEmail !== null}`);




const JobsSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validated: [validateEmail, 'You must enter a valid email address.']
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

module.exports = Jobs;


