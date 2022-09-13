const {tweetDao} = require('../models');

const tweetPost = async (user_id,replyTF,content,content_img,reply_at,tweet_for) => {
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

module.exports = {
 tweetPost
}