const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const tweetRouter = require("./tweetRouter");

router.use("/user", userRouter);
router.use("/tweet", tweetRouter);

module.exports = router
