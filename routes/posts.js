const express = require("express");
const router = express.Router();
const { getAllPosts, getSinglePost } = require("../controllers/posts");

//import middlewares
const checkLanguage = require("../middlewares/checkLanguage");
const checkTime = require("../middlewares/checkTime");

router.route("/posts").get(checkLanguage, checkTime, getAllPosts);
router.route("/posts/:id").get( getSinglePost);

module.exports = router;
