const express = require("express");
const router = express.Router();
const signupJSON = require("../views/sign-up/sign-up.json");

router.get("/", (req, res) => {
  res.send("Newsletter Signup");
});

router.get("/sign-up", (req, res) => {
    res.render("sign-up/sign-up", signupJSON);
});

module.exports = router;
