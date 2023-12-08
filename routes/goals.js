const express = require("express");
const router = express.Router();
const goals = require("../views/goals/goalsData.json");
const footer = require("../views/footerData.json");

// const connectLivereload = require("connect-livereload");
// const livereload = require("livereload");

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch("public");

// router.use(connectLivereload());

router.get("/", (req, res) => {
  res.send("Goal List");
});

router.get("/:goalId", (req, res) => {
  goalData = goals[req.params.goalId - 1];
  res.render("goals/goals", { goals, goalData, footer });
});

module.exports = router;
