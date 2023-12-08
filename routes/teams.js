const express = require("express");
const router = express.Router();
const goals = require("../views/goals/goalsData.json");
const teams = require("../views/teams/teamsData.json");
const footer = require("../views/footerData.json");

router.get("/", (req, res) => {
  res.render("teams/teams", { goals, teams, footer });
});

module.exports = router;
