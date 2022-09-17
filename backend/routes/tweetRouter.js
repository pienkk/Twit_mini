const express = require("express");
const router = express.Router();
const { tweetController } = require("../controllers");
const { accessToken } = require("../middleware/auth");
const { upload } = require("../util/multer2")


router.get("/search", tweetController.idSearch)
// router.post("/", accessToken, tweetController.tweetPost);
router.delete("/", accessToken, tweetController.tweetDel);
router.get("/list", tweetController.tweetsList);
router.post("/reply", accessToken, tweetController.tweetReply);
router.get("/side", tweetController.tweetTrend);
router.post('/', upload.single('image'), accessToken, tweetController.tweetPost)
// upload 와 토큰 순서가 바뀌면 토큰이 정상작동하지않음
// router.post("/test",upload.single('img'),accessToken, tweetController.tweetPost);

module.exports = router;
