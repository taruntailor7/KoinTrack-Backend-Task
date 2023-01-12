const express = require('express');

const quesstionRouter = express.Router();

quesstionRouter.post("/read");

module.exports = quesstionRouter;