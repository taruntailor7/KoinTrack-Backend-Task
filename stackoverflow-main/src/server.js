const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Stackoverflow");
})
console.log(process.env.PORT,"env")
const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(
  PORT,
  console.log(`server started at port ${PORT}`)
);
