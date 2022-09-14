const { tweetService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const tweetPost = asyncWrap(async (req, res) => {
  let tweetPost = ({
    user_id,
    replyTF,
    content,
    content_img,
    reply_at,
    tweet_for,
  } = req.body);

  if (!user_id || !replyTF || !content || !tweet_for) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await tweetService.tweetPost(
    user_id,
    replyTF,
    content,
    content_img,
    reply_at,
    tweet_for
  )
  res.status(201).json({ message: "tweetCreated" });
});

const tweetDel = asyncWrap(async (req, res) => {
  let tweetDel = ({
    user_id,
    tweet_id
  } = req.body);

  if (!user_id || !tweet_id) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await tweetService.tweetDel(
    user_id,
    tweet_id
  )
  res.status(201).json({ message: "tweetDeleted" });
});

module.exports = { tweetPost, tweetDel };
