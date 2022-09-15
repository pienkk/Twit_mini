const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const tweetRouter = require("./tweetRouter");
const likeRouter = require("./likeRouter");
const followRouter = require("./followRouter")
const dmRouter = require("./dmRouter");
const mainRouter = require("./mainRouter");

router.use("/user", userRouter);
router.use("/tweet", tweetRouter);
router.use("/like", likeRouter);
router.use("/follow", followRouter);
router.use("/dm", dmRouter);
router.use("/main", mainRouter);


module.exports = router
