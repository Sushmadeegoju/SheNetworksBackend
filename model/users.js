const mongoose = require( "mongoose" );

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    skillset: {
        type: String,
        required: true
    }, 
    workExperience: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String
    },
    image: {
        type: String,
    },
    resume: {
        type: String
    }
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel;