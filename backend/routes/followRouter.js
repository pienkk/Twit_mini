const express = require("express");
const router = express.Router();
const { accessToken } = require("../middleware/auth");

const {followController} = require("../controllers");

router.get("/follow", accessToken, followController.followList);
router.get("/follower", accessToken, followController.followerList)
router.post("/", accessToken, followController.followUp);
router.delete("/", accessToken, followController.followDown);



module.exports = router