const express = require("express");
const retweetController = require("../controllers/retweetController");

const router = express.Router();

router.post('/postRetweet', retweetController.postRetweet);
router.delete('/removeRetweet', retweetController.removeRetweet)

module.exports = {
    router
}