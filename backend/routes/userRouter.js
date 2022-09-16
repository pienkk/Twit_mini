const express = require("express");
const router = express.Router();

const { userController } = require("../controllers");

router.post("/signin", userController.signIn);
router.post("/signup", userController.signUp);
router.patch('/profilePost', userController.postProfile);

module.exports = router;

