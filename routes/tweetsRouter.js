const express = require("express");
const tweetsController = require("../controllers/tweetsController.js");

const router = express.Router();
const {accessToken} = require("../middleware/auth");

router.post("/",accessToken,tweetsController.tweetPost);

module.exports = {
  router,
};