const express = require("express");
const router = express.Router();
const home = require("../views/home/homeData.json");
const nav = require("../views/navData.json");
const footer = require("../views/footerData.json");

router.get("/", (req, res) => {
  res.render("home/home", { nav, home, footer });
});

module.exports = router;
