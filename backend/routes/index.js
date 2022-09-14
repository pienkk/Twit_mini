const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const dmRouter = require("./dmRouter");

router.use("/users", userRouter);
router.use("/dm", dmRouter)


module.exports = router
