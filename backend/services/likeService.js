const { likeDao } = require("../models");

const tweetLike = async (user_id, tweet_id) => {
  const find = await likeDao.findLike(user_id, tweet_id)
  if (find) {
    const err = new Error("이미 좋아요된 게시글 입니다.")
    err.statusCode = 409;
    throw err
  }
    const tweetLike = await likeDao.tweetLike(
      user_id,
      tweet_id
    );
    return tweetLike;
  };

  const delLike = async (user_id, tweet_id) => {
    const find = await likeDao.findLike(user_id, tweet_id)
    if (!find) {
      const err = new Error("좋아요를 하지 않은 게시글 입니다..")
      err.statusCode = 409;
      throw err
    }
    const delLike = await likeDao.delLike(
      user_id,
      tweet_id
    );
    return delLike;
  };


  module.exports = { tweetLike, delLike }