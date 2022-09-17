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

router.post("/test", upload.single("profile_img"), (req, res ) => {
    console.log("single",req.file);
    console.log("body", req.body);
    const image = req.file
    res.send(`http://10.58.0.49:3000/img/${image.filename}`)
})
router.post("/test2", upload.fields([{ name: "profile_img"}, { name: "backgroundImg" }]),
(req, res) => {
    console.log("fields",req.files);
    console.log("body",req.body)
    const image = req.file
    res.send(`http://10.58.0.49:3000/img/${image.filename}`)
})

module.exports = router;