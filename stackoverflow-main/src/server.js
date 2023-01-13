const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const connection = require("./config/db.js");
const userRouter = require("./routes/user.route.js");
const quesstionRouter = require("./routes/question.route.js");
const answerRouter = require("./routes/answer.route.js");
const middleware = require("./middleware/index.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Stackoverflow");
})

app.use("/user", userRouter)
app.use("/question", quesstionRouter)
app.use("/answer", answerRouter)


const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(PORT,()=>{
  try {
    connection();
    console.log(`server started at port ${PORT}`)
  } catch (error) {
    console.log(error)
  }
});
