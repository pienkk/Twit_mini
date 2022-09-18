const database = require("./orm");

const findLike = async (user_id, tweet_id) => {
  try {
    const [ result ] = await database.query(
      `SELECT 
        *
      FROM likes
      WHERE user_id = ? AND tweet_id = ?`,
      [user_id, tweet_id]
    )
    return result
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

const likeEx = async (user_id, post_id) => {
  try {
    return await database.query(
      `SELECT user_id,
                    tweet_id
                    FROM likes 
            WHERE user_id=?
            `,
            [user_id]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const tweetLike = async (user_id, post_id) => {
  try {
    console.log(user_id, post_id)
    return await database.query(
      `INSERT INTO likes(
                user_id,
                tweet_id
            ) VALUE(?,?)
            `,
      [user_id, post_id]
    );
  } catch (err) {
    console.log(err)
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const likeCount = async ( tweetId ) => {
  try {
    const [ like ] = await database.query(
      `SELECT COUNT(tweet_id) as count
      FROM likes
      WHERE tweet_id = ?`,
      [ tweetId ]
    )
    const count = like.count;
    return +count
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

const delLike = async ( user_id, tweet_id) => {
  try {
      return await database.query(
          `DELETE FROM likes
          WHERE user_id = ? AND tweet_id = ?`,
          [ user_id, tweet_id ]
      )
  } catch (err) {
      const error = new Error(`INVALID_DATA_INPUT`);
      error.statusCode = 500;
      throw error;
  }
}

module.exports = { findLike,tweetLike, likeEx,likeCount,delLike };
