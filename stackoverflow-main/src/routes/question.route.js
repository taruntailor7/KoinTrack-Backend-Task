const express = require('express');
const { askQuestion, allQuestions, readQuestion, updateQuestion } = require('../controllers/question.controller');


const quesstionRouter = express.Router();

quesstionRouter.post("/ask", askQuestion);

quesstionRouter.get("/", allQuestions);

quesstionRouter.get("/read/:_id", readQuestion);

quesstionRouter.patch("/update/:_id", updateQuestion);

module.exports = quesstionRouter;