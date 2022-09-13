const database = require("./orm");

const tweetPost = async (
  user_id,
  replyTF,
  content,
  content_img,
  reply_at,
  
) => {
  try {
    return await database.query(
      `INSERT INTO tweets(
            user_id,
            replyTF,
            content,
            content_img,
            reply_at,
            tweet_for
        ) VALUES (?, ?, ?, ?, ?, "IPAD");
		`,
      [user_id,replyTF,content,content_img,reply_at]
    );
    

  } catch (err) {
    
    const error = new Error("INVALID_DATA_INPUT");
    console.log(err)
    error.statusCode = 500;
    throw error;
  }
};

module.exports = { tweetPost };
