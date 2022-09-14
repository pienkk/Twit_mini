const database = require("./orm");

const tweetPost = async (
  user_id,
  content,
  content_img,
  tweet_for
) => {
  try {
    return await database.query(
      `INSERT INTO tweets(
            user_id,
            replyTF,
            content,
            content_img,
            tweet_for
        ) VALUES (?,"0", ?, ?, ?);
		`,
      [user_id, content, content_img, tweet_for]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};
const tweetEx = async (tweet_id) => {
  let tweetEx = await database.query(
  `SELECT user_id 
  FROM tweets WHERE tweets.id =?
  `,
[tweet_id])
return await tweetEx;
}

const tweetDel = async (
  user_id,
  tweet_id
) => {
    try {
     let result = await database.query(
      `DELETE FROM tweets
      WHERE id = ? AND user_id= ?;
		`,
      [tweet_id, user_id]
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const tweetsList = async () => {
  try {
    return await database.query(
      `SELECT tweets.user_id,
                tweets.id,
                tweets.replyTF,
                tweets.content,
                tweets.content_img,
                tweets.reply_at,
                tweets.create_at,
                tweets.tweet_for
         FROM users JOIN tweets ON users.id = tweets.user_id`
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const tweetReply = async (
  user_id,
  content,
  content_img,
  tweet_for,
  reply_at
) => {
  try {
    return await database.query(
      `INSERT INTO tweets(
            user_id,
            replyTF,
            content,
            content_img,
            tweet_for,
            reply_at
        ) VALUES (?,"1", ?, ?, ?, ?);
		`,
      [user_id, content, content_img, tweet_for, reply_at]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = { tweetPost, tweetDel, tweetEx, tweetsList, tweetReply, };
