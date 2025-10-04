var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express and Jenkins",
    message: "This is the revision of Nodejs from scratch.",
  });
});

module.exports = router;
