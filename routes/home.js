const express = require("express");
const router = express.Router();
const homeJSON = require("../views/home/homeData.json");

router.get("/", (req, res) => {
  res.render("home/home", homeJSON);
});

module.exports = router;
