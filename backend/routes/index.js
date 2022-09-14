const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const tweetRouter = require("./tweetRouter");
const likeRouter = require("./likeRouter");

router.use("/user", userRouter);
router.use("/tweet", tweetRouter)
router.use("/like", likeRouter);;

module.exports = router
