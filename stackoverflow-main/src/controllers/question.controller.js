const { questionModel } = require("../models/question.model");

const askQuestion = async (req, res) =>{
    try {
        let {userId,question,count} = req.body;
        let newQuestion = await questionModel.create({userId,question,count});
        res.send({
            error:false,
            message:"Your question has been posted!",
            question:newQuestion
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
            message: "Something went wrong!"
        });
    }
}

const allQuestions = async (req, res) =>{
    try {
        let allQuestions = await questionModel.find();
        return res.send({
            error:false,
            data:allQuestions
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
            message: "Something went wrong!"
        });
    }
}

const question = async (req, res) =>{
    try {
        let {_id} = req.params;
        let question  = await questionModel.findById({_id});
        question.count = question.count+1;
        await questionModel.findByIdAndUpdate({_id},{count:question.count});
        return res.send({
            error:false,
            data:question
        })
    } catch (error) {
        return res.status(500).send({
            error: error,
            message: "Something went wrong!"
        });
    }
}
module.exports = {askQuestion,allQuestions, question}