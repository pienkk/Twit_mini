const database = require("./orm");

const mainFeed = async (user_id) => {
  try {
    return await database.query(
      `select tweets.id, 
      users.profile_id, 
      users.profile_nickname,
      users.profile_image, 
      tweets.replyTF, 
      tweets.content, 
      tweets.content_img,
      tweets.create_at, 
      likes.tweet_id AS "likeEx",
      retweet.tweet_id AS "rtEx" from tweets
      inner join users on tweets.user_id = users.id 
      left join likes on likes.tweet_id = tweets.id AND likes.user_id = ?
      left join retweet on retweet.tweet_id = tweets.id AND retweet.user_id=?
      `,
      [user_id, user_id]
      );
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    }
  };

const findId = async (text) => {
  try {
    const result = await database.query(
      `SELECT
        profile_id,
        profile_nickname,
        profile_image,
        comment 
      FROM users WHERE profile_id LIKE "%${text}%" OR profile_nickname LIKE "%${text}%" `,
    )
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

const findTweets = async (text) => {
  try {
    const result = await database.query(
      `SELECT
      `
    )
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}
  
const replyCount = async (user_id) => {
  try {
    return await database.query(`SELECT tweets.id
    from tweets WHERE replyTF=1
    `);
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const likeCount = async (user_id) => {
  try {
    return await database.query(`SELECT tweets.id
    FROM tweets JOIN likes WHERE tweets.id=likes.tweet_id 
    `);
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const rtCount = async (user_id) => {
  try {
    return await database.query(`SELECT tweets.id
    FROM tweets JOIN retweet WHERE tweets.id=retweet.tweet_id 
    `);
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};
  


module.exports = { mainFeed, findId, replyCount, likeCount, rtCount };


