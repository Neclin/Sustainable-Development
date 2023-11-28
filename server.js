const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const goalRouter = require("./routes/goals");

app.use("/goals", goalRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
