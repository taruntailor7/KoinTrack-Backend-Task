const express = require('express');
const { askQuestion } = require('../controllers/question.controller');


const quesstionRouter = express.Router();

quesstionRouter.post("/ask", askQuestion);

quesstionRouter.get("/read");

module.exports = quesstionRouter;