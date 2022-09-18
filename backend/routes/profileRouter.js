const express = require("express");
const router = express.Router();
const { profileController } = require("../controllers");
const { accessToken } = require("../middleware/auth");
const { upload } = require("../util/multer")

router.get("/", accessToken, profileController.getProfile);
router.get("/tweets", accessToken, profileController.getMyTweets);
router.get("/reply", accessToken, profileController.getReplyTweets)
router.get("/like", accessToken,profileController.getLikeTweets);
router.get("/media", accessToken, profileController.getMediaTweets)
router.patch('/modify', upload.fields([{ name: "profile_img"}, { name: "backgroundImg" }]), 
accessToken, profileController.postProfile);


module.exports = router;