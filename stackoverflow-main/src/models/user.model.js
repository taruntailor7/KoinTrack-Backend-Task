const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required : true,
        minlength: 8
    }
},{timestamps: true, versionKey: false});

module.exports.userModel = mongoose.model("users",userSchema);