const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    question:{
        type:String,
        required: true
    },
    count:{
        type:Number,
        default: 0
    },
    answers:{
        type:Array,
        default:[]
    }
},{timestamps: true, versionKey: false});

module.exports.questionModel = mongoose.model("questions",questionSchema);