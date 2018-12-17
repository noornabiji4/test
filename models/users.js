const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const userSchema = new mongoose.Schema({

    firstname:{
        type:String
    },
    middleName:{
        type: String
    },
    lastName: {
        type: String
    },
    mobileNUmber:{
        type:Number
    },
    username: {
        type: String,
        required: true
    },
    emailID: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword:{
        type:String
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User; 