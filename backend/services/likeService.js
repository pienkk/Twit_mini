const { likeDao } = require("../models");

const tweetLike = async (user_id, tweet_id) => {
    const tweetLike = await likeDao.tweetLike(
      user_id,
      tweet_id
    );
    return tweetLike;
  };

  module.exports = { tweetLike }