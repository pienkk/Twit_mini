const database = require("./orm");

const tweetPost = async (user_id,content,contentImg) => {
  try {
    return await database.query(
      `INSERT INTO tweets(
            user_id,
            replyTF,
            content,
            content_img,
            tweet_for
        ) VALUES (?,"0", ?, ?, "MAC");
		`,
      [user_id, content, contentImg]
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

const initReply = async (tweet_id) => {
  let initReply = await database.query(
    `UPDATE tweets
    SET reply_at = NULL, replyTF="0"
    WHERE reply_at=?;
    `,
    [tweet_id]
   )
return await initReply;
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
        ) VALUES (?,"1", ?, ?, "IPAD", ?);
		`,
      [user_id, content, content_img, reply_at]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const tweetHashTag = async () => {
  try {
    return await database.query(
      `SELECT 
        SUBSTRING_INDEX(content, " ", -1) as hash
      FROM tweets
      WHERE content like "%#%"`
    )
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

const replyCount = async ( tweetId ) => {
  try {
    const [ reply ] =  await database.query(
      `SELECT COUNT(reply_at) as count
      FROM tweets
      WHERE reply_at = ?`,
      [ tweetId ]
    )
    const count = reply.count;
    return +count;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

const tweetImg = async ( tweetId ) => {
  try {
    const [img] = await database.query(
      `SELECT 
        content_img as image
      FROM tweets
      WHERE id = ?`,
    [ tweetId ]
    ) 
    return img
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

module.exports = { tweetPost, tweetDel, tweetEx, tweetsList, tweetReply, initReply, tweetHashTag, replyCount,tweetImg};
