const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let formEntries = []

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const homeRouter = require("./routes/home");
app.use("/", homeRouter);

const signupRouter = require("./routes/sign-up");
app.use("/sign-up", signupRouter);

const teamsRouter = require("./routes/teams");
app.use("/teams", teamsRouter);

const goalRouter = require("./routes/goals");
app.use("/goals", goalRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/form", jsonParser, (req, res) => {
  formEntries.push(req.body);
  res.send(`Thank you ${req.body.firstName} for joining our newsletter!`);
  console.log(formEntries);
})