const express = require("express");
const router = express.Router();
const { tweetController } = require("../controllers");
const { accessToken } = require("../middleware/auth");

router.get("/search", tweetController.idSearch)
router.post("/", accessToken, tweetController.tweetPost);
router.delete("/", accessToken, tweetController.tweetDel);
router.get("/list", tweetController.tweetsList);
router.post("/reply", accessToken, tweetController.tweetReply);
router.get("/side", tweetController.tweetTrend)

module.exports = router;
