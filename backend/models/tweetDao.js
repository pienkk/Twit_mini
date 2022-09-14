const database = require("./orm");

const tweetPost = async (
  user_id,
  replyTF,
  content,
  content_img,
  reply_at,
  tweet_for
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
        ) VALUES (?, ?, ?, ?, ?, ? );
		`,
      [user_id, replyTF, content, content_img, reply_at, tweet_for]
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
    let tweetDel = await database.query(
    `SELECT user_id 
      FROM tweets WHERE tweets.id =?
      `,
    [tweet_id]
  )
  try {
     let result = await database.query(
      `DELETE FROM tweets
      WHERE id = ? AND user_id= ?;
		`,
      [tweet_id, user_id]
    );
    return await tweetDel
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};


module.exports = { tweetPost, tweetDel, tweetEx };
