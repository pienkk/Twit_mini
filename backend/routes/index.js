const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const followRouter = require("./followRouter")
const dmRouter = require("./dmRouter");

router.use("/users", userRouter);
router.use("/follow", followRouter);
router.use("/dm", dmRouter);


module.exports = router
