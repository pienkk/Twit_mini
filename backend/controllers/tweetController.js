const {tweetService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const tweetPost = asyncWrap (async (req, res) => {
     const {
      user_id,
      replyTF,
      content,
      content_img,
      reply_at,
   
    } = req.body;
    if (!user_id || !replyTF || !content ) {
      await tweetService.tweetPost(
        user_id,
        replyTF,
        content,
        content_img,
        reply_at,
       
      );
      return res.status(400).json({ message: 'KEY_ERROR' });
    }
  
});
module.exports = {tweetPost};
