const express = require("express");
const router = express.Router();
const goals = require("../views/goals/goalsData.json");
const footer = require("../views/footerData.json");

router.get("/", (req, res) => {
  res.render("sign-up/sign-up", { goals, footer });
});

module.exports = router;
