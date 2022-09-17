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
  const {user_id, text} = req.body;
  let contentImg = req.file;
  if (!user_id || !text ) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err
  }
  const result = await tweetService.tweetPost(user_id,text,contentImg);
  res.status(201).json({ message: "tweetCreated", content_img: result.image });
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
    reply_at,
  } = req.body);
  let contentImg = null;
  if (req.file) {
    contentImg = req.file.filename;
  }

  if (!user_id || !content || !reply_at) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await tweetService.tweetReply(
    user_id,
    content,
    reply_at,
    contentImg
  );
  res.status(201).json({ message: "replyCreated" });
});

const tweetTrend = asyncWrap(async (req, res) => {
  const result = await tweetService.tweetTrend();
  return res.status(200).json({ result })
})

module.exports = { idSearch, tweetPost, tweetDel, tweetsList, tweetReply, tweetTrend };
