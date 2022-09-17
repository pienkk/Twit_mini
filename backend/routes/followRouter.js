const express = require("express");
const router = express.Router();
const { accessToken } = require("../middleware/auth");

const {followController} = require("../controllers");

router.get("/follow", followController.followList);
router.get("/follower", followController.followerList)
router.post("/:profileId", accessToken, followController.followUp);
router.delete("/:profileId", accessToken, followController.followDown);



module.exports = router