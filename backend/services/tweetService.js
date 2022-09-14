const { tweetDao } = require("../models");

const tweetPost = async (
  user_id,
  replyTF,
  content,
  content_img,
  reply_at,
  tweet_for
) => {
  const tweetPost = await tweetDao.tweetPost(
    user_id,
    replyTF,
    content,
    content_img,
    reply_at,
    tweet_for
  );

  return tweetPost;
};

const tweetDel = async (
  user_id,
  tweet_id
) => {
  const [tweetEx] = await tweetDao.tweetEx(tweet_id)
  console.log(await tweetEx)
  if (!tweetEx) {
    const err = new Error(`TWEET_NOT_EXIST`);
    err.statusCode = 400;
    throw err;
}
  const [tweetDel] = await tweetDao.tweetDel(
    user_id,
    tweet_id
  )
  try {
    if (user_id==tweetEx.user_id)
    return tweetDel;
    else {err}
  } catch (err) {
    const error = new Error("NOT_YOUR_POST");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  tweetPost, tweetDel, 
}
