const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home", { title: "Home page" });
});
router.get("/Binnenlands", function(req, res, next) {
  res.render("Binnenlands", { title: "Binnenlands nieuws" });
});
module.exports = router;
 