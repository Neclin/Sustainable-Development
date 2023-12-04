const express = require("express");
const router = express.Router();
const homeJSON = require("../views/home/homeData.json");

const connectLivereload = require("connect-livereload");
const livereload = require("livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.watch("public");

router.use(connectLivereload());

router.get("/", (req, res) => {
  res.render("home/home", homeJSON);
});

module.exports = router;
