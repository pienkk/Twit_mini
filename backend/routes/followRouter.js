const express = require("express");
const router = express.Router();

const {followController} = require("../controllers");

router.get("/follow", followController.followList);
router.get("/follower", followController.followerList)
router.post("/:profileId", followController.followUp);
router.delete("/:profileId", followController.followDown);



module.exports = router