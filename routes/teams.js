const express = require("express");
const router = express.Router();
const signupJSON = require("../views/teams/teams.json");

router.get("/", (req, res) => {
  res.render("teams/teams", signupJSON);
});

module.exports = router;