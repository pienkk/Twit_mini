const { tweetService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const idSearch = asyncWrap(async (req, res) => {
  const { id } = req.body;
  if ( !id ) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err;
  }
  const users = await tweetService.idSearch( id );
  return res.status(200).json({users});
})

const tweetPost = asyncWrap(async (req, res) => {
  const {user_id, content} = req.body;
  let contentImg = null;
  if (req.file) {
    contentImg = req.file.filename;
  }
  console.log(req.file)
  if (!user_id || !content ) {
    console.log("err")
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await tweetService.tweetPost(user_id,content,contentImg);
  res.status(201).json({ message: "tweetCreated" });
});

const tweetDel = asyncWrap(async (req, res) => {
  let tweetDel = ({ user_id, tweet_id } = req.body);

  if (!user_id || !tweet_id) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await tweetService.tweetDel(user_id, tweet_id);
  res.status(201).json({ message: "tweetDeleted" });
});

const tweetsList = asyncWrap(async (req, res) => {
  const result = await tweetService.tweetsList();
  return await res.status(201).json(result);
});

const tweetReply = asyncWrap(async (req, res) => {
  let tweetReply = ({
    user_id,
    content,
    content_img,
    tweet_for,
    reply_at,
  } = req.body);

  if (!user_id || !content || !tweet_for || !reply_at) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await tweetService.tweetReply(
    user_id,
    content,
    content_img,
    tweet_for,
    reply_at
  );
  res.status(201).json({ message: "replyCreated" });
});

const tweetTrend = asyncWrap(async (req, res) => {
  const result = await tweetService.tweetTrend();
  return res.status(200).json({ result })
})

module.exports = { idSearch, tweetPost, tweetDel, tweetsList, tweetReply, tweetTrend };
