const express = require("express");
const router = express.Router();
const {tweetController} = require("../controllers");
const {accessToken} = require("../middleware/auth");

router.post("/",accessToken,tweetController.tweetPost);

module.exports =router
