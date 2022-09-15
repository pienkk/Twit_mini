const database = require("./orm");

const mainFeed = async (user_id) => {
  try {
    return await database.query(
      `select tweets.id, 
      users.profile_id, 
      users.profile_nickname, 
      tweets.replyTF, 
      tweets.content, 
      tweets.content_img, 
      likes.tweet_id AS "likeEx" from tweets
      inner join follows on follows.follow_to = tweets.user_id 
      inner join users on tweets.user_id = users.id 
      left join likes on likes.tweet_id = tweets.id AND likes.user_id = ? WHERE follow_from = ?;
      `,[user_id, user_id]

    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const replyCount = async (user_id) => {
  try{
    return await database.query(`SELECT tweets.id
    from tweets WHERE replyTF=1
    `
    );
  }catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
} 

module.exports = { mainFeed, replyCount};
