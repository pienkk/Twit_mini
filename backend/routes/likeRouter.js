const express = require("express");
const router = express.Router();
const { likeController } = require("../controllers");
const { accessToken } = require("../middleware/auth");

router.post("/", accessToken, likeController.tweetLike);
router.delete("/", accessToken, likeController.delLike)

module.exports = router;
