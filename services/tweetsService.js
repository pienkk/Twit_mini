const tweetsDao = require('../models/tweetsDao');

const tweetsPost = async (title, content, userId) => {
  const tweetsPost = await tweetsDao.tweetsPost(
    user_id,
    replyTF,
    content,
    content_img,
    reply_at,
    create_at,
    tweet_for
  );

  return tweetsPost;
};

module.export = { tweetsPost };
