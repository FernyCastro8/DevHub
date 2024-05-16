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



const developerSchema = new mongoose.Schema({
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
        unique: true,
        validated: [validateEmail, 'You must enter a valid email address.']
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

module.exports = Developer;