const { database } = require("./data-source");

const tweetsPost = async (user_id,replyTF,content,content_img,reply_at,create_at,tweet_for) => {
  try {
    return await database.query(
      `INSERT INTO tweets(
            user_id,
            replyTF,
            content,
            content_img,
            reply_at,
            create_at,
            tweet_for
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
		`,
      [user_id,replyTF,content,content_img,reply_at,create_at,tweet_for]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};


module.exports={tweetsPost}