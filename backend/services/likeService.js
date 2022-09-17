const { likeDao } = require("../models");

const tweetLike = async (user_id, tweet_id) => {
    const tweetLike = await likeDao.tweetLike(
      user_id,
      tweet_id
    );
    return tweetLike;
  };

  const delLike = async (user_id, tweet_id) => {
    const delLike = await likeDao.delLike(
      user_id,
      tweet_id
    );
    return delLike;
  };


  module.exports = { tweetLike, delLike }