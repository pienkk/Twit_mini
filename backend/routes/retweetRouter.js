const express = require("express");
const retweetController = require("../controllers/retweetController");

const router = express.Router();

router.post('/post', retweetController.postRetweet);
router.delete('/remove', retweetController.removeRetweet)

module.exports =    router
