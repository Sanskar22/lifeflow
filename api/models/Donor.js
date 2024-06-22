const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
    },
    totalDonate: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    lastDonate: {
        type: Date,
    },
});

const Donor = mongoose.model('Donor', DonorSchema);

module.exports = Donor;
