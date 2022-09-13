const express = require("express");

const usersRouter = require("./usersRouter");
const tweetsRouter = require("./tweetsRouter");
const retweetsRouter = require("./retweetsRouter");
const likesRouter = require("./likesRouter");
const followsRouter = require("./followsRouter");
const dmRouter = require("./dmRouter");


const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/tweets", tweetsRouter.router);
router.use("/retweets", retweetsRouter);
router.use("/likes", likesRouter.router);
router.use("/follow", followsRouter);
router.use("/dm", dmRouter);

module.exports = router;
