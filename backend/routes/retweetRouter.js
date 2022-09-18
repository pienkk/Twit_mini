const express = require("express");
const retweetController = require("../controllers/retweetController");
const { accessToken } = require("../middleware/auth");


const router = express.Router();

router.post('/', accessToken, retweetController.postRetweet);
router.delete('/', accessToken, retweetController.removeRetweet)

module.exports =    router
