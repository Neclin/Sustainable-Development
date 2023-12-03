const express = require("express");
const router = express.Router();
const signupJSON = require("../views/sign-up/sign-up.json");

router.get("/", (req, res) => {
  res.render("sign-up/sign-up", signupJSON);
});

module.exports = router;
