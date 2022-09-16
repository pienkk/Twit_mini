const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const retweetRouter = require("./retweetRouter");

router.use("/users", userRouter.router);
router.use("/retweet", retweetRouter.router);

module.exports = router;