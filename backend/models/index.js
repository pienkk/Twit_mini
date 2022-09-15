const userDao = require("./userDao");
const tweetDao = require("./tweetDao");
const likeDao = require("./likeDao");
const mainDao = require("./mainDao");
const dmDao = require("./dmDao");
const followDao = require("./followDao")

module.exports = {
    userDao,
    tweetDao,
    likeDao,
    mainDao,
    dmDao,
    followDao
}