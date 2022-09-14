const express = require("express");
const router = express.Router();
const { tweetController } = require("../controllers");
const { accessToken } = require("../middleware/auth");

router.post("/", accessToken, tweetController.tweetPost);
router.delete("/", accessToken, tweetController.tweetDel);
router.get("/list", tweetController.tweetsList);
router.post("/reply", accessToken, tweetController.tweetReply);
router.get("/sidepanel", tweetController.tweetTrend)

module.exports = router;
