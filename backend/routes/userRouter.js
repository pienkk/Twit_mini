const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.patch('/profilePost', userController.postProfile);

module.exports = {
    router
}