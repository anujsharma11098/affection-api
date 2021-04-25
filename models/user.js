const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    personal_photos :{
        img1: {
            type: String,
            required: true,
            unique: true
        },img2: {
            type: String,
            unique: true
        },img3: {
            type: String,
            unique: true
        },img4: {
            type: String,
            unique: true
        },img5: {
            type: String,
            unique: true
        }
    },
    plan:{
        type: String,
        default:'No Plan',
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)