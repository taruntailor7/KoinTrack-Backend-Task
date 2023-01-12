const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const { connection } = require("./config/db.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Stackoverflow");
})

// app.use("/user")
// app.use("/question")
// app.use("/answer")

console.log(process.env.PORT,"env")
const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(PORT,()=>{
  try {
    connection();
    console.log(`server started at port ${PORT}`)
  } catch (error) {
    console.log(error)
  }
});
