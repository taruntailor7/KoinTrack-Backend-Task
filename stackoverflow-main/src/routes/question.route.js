const express = require('express');
const { askQuestion, allQuestions, question } = require('../controllers/question.controller');


const quesstionRouter = express.Router();

quesstionRouter.post("/ask", askQuestion);

quesstionRouter.get("/", allQuestions);

quesstionRouter.get("/read/:_id", question);

module.exports = quesstionRouter;