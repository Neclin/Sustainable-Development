const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const fs = require('fs'); // 

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
  fs.readFile("./formDetails.JSON", (err, data) => {  // reads all the data in the JSON file and asigns it with the data parameter
    if (err) {
      console.log("Failed to read file.")
      return;
    }

    const newData = JSON.parse(data)
    newData.entries.push(req.body) // appends the new users entry to all the existing entries within the file

    fs.writeFile("./formDetails.JSON", JSON.stringify(newData), (error) => {  // converts the combined old entries and new entries back into json objects and writes it to the file
      if (error){
        console.log("Entry could not be added.")
        return;
      }
      console.log("Entry was successfully added.")
    })

  })
  res.send(`Thank you ${req.body.firstName} for joining our newsletter!`)
});
