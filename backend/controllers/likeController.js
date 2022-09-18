const { likeService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const tweetLike = asyncWrap(async (req, res) => {
    let tweetLike = ({
      user_id,
      tweet_id
    } = req.body);
  
    if (!user_id || !tweet_id) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }
    await likeService.tweetLike(
      user_id,
      tweet_id
    );
    res.status(201).json({ message: "likeCreated" });
  });

const delLike = asyncWrap(async(req, res) => {
  let delLike = ({
    user_id,
    tweet_id
  }=req.body)
  if (!user_id || !tweet_id) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await likeService.delLike(
    user_id,
    tweet_id
  );
  res.status(201).json({ message: "likeDeleted" });

})

  module.exports = { tweetLike, delLike };

