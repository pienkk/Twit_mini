const database = require("./orm");

const mainFeed = async () => {
    try {
      return await database.query(
        `SELECT tweets.user_id,
        tweets.id,
        tweets.replyTF,
        tweets.content,
        tweets.content_img,
        tweets.reply_at,
        tweets.create_at,
        tweets.tweet_for,
        likes.user_id AS "like"
 FROM users LEFT JOIN tweets ON users.id = tweets.user_id
 LEFT JOIN likes ON tweets.id = likes.tweet_id;`
      );
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    }
  };
  
  module.exports = { mainFeed};