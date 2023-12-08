const express = require("express");
const router = express.Router();
const home = require("../views/home/homeData.json");
const goals = require("../views/goals/goalsData.json");
const footer = require("../views/footerData.json");

router.get("/", (req, res) => {
  res.render("home/home", { goals, home, footer });
});

module.exports = router;
