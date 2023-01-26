const express = require("express");
const router = express.Router();

router.route("/authors").get((req, res) => {
  res.send("hello authors");
});

module.exports = router;
