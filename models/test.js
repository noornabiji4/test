const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({

    studentId: {
        type: Number
    },
    studentName: {
        type: String
    },
    emailId: {
        type: String
    },
    class: {
        type: String
    },
    enrollment: {
        type: Number
    },
    city: {
        type: String
    },
    country: {
        type: String
    },

});

const School = mongoose.model('School', schoolSchema)

module.exports = School;
