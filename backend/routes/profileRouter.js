const express = require("express");
const router = express.Router();
const { profileController } = require("../controllers");
const { accessToken } = require("../middleware/auth");
const { upload } = require("../util/multer")

router.get("/", accessToken, profileController.getProfile);
router.get("/tweets", accessToken, profileController.getMyTweets);


router.post("/test", upload.single("image"), (req, res ) => {
    console.log("single",req.file);
    console.log("body", req.body);
    const image = req.file
    res.send(`http://10.58.0.49:3000/img/${image.filename}`)
})
router.post("/test2", upload.fields([{ name: "text"}, { name: "image" }]),
(req, res) => {
    console.log("fields",req.file, req.body);
    const image = req.file
    res.send(`http://10.58.0.49:3000/img/${image.filename}`)
})

module.exports = router;