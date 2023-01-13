const express = require('express');
const { askQuestion, allQuestions, readQuestion } = require('../controllers/question.controller');


const quesstionRouter = express.Router();

quesstionRouter.post("/ask", askQuestion);

quesstionRouter.get("/", allQuestions);

quesstionRouter.get("/read/:_id", readQuestion);

module.exports = quesstionRouter;