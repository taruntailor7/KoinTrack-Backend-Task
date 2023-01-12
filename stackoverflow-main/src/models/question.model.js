const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    
},{timestamps: true, versionKey: false});

module.exports.questionModel = mongoose.model("questions",questionSchema);