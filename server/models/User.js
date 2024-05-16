const mongoose = require('mongoose');
const { Schema, Model } = require('mongoose');
// package to has password
const bcrypt = required('bcrypt');


// Creating a user Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: string,
        required: true,
        unique: true,
        validated: [validateEmail, 'You must enter a valid email address.']
    },
    password: {
        type: String,
        required: true,
        validate: validatePassword
    }
});


// Funtion to validate email
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// Funtion to validate password
function validatePassword(password) {
    const minLength = 8;
    const maxLength = 20;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (!password) {
        return "Password cannot be empty.";
    }

    if (password.length < minLength || password.length > maxLength) {
        return `Password must be between ${minLength} and ${maxLength} characters long.`;
    }

    if (!regex.test(password)) {
        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).";
    }

    return "Password is valid.";
}


// Define a pre-save middleware on the user schema to check is that no unencrypted password gets stored to the database.
userSchema.pre('save', async function (next) {
    // Check if the document is new or the password field has been modified
    if (this.isNew || this.isModified('password')) {
        // Hash the password with a salt factor of 10
        const encryptedPassword = await bcrypt.hash(this.password, 10);

        // Replace the plain text password with the hashed password
        this.password = encryptedPassword;

        // Call the next middleware or save the document
        return next();
    }

    // If the password hasn't been modified, just proceed to the next middleware or save
    next();
});



// Define a method on the user schema to validate the password
userSchema.methods.validatePassword = async function (form_password) {
    // Compare the provided password with the hashed password stored in the database
    const is_valid = await bcrypt.compare(form_password, this.password);

    // Return the result of the comparison (true if the passwords match, false otherwise)
    return is_valid;
}


const User = mongoose.model('user', userSchema);

module.exports = User;