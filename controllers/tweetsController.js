const tweetsService = require('../services/tweetsService');

const tweetPost = async (req, res) => {
  try {
    const {
      user_id,
      replyTF,
      content,
      content_img,
      reply_at,
      create_at,
      tweet_for,
    } = req.body;
    if (!user_id || !replyTF || !content || !create_at || !tweet_for) {
      await tweetsService.tweetPost(
        user_id,
        replyTF,
        content,
        content_img,
        reply_at,
        create_at,
        tweet_for
      );
      return res.status(400).json({ message: 'KEY_ERROR' });
    }
  } catch (err) {
    return await res
      .status(err.statusCode || 500)
      .json({ message: err.message });
  }
};
module.exports = {
  tweetPost,
};
