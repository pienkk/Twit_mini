const appDataSource = require("./orm");

const retweetCount = async ( tweetId ) => {
    try {
      const [ retweet ] =  await appDataSource.query(
        `SELECT COUNT(tweet_id) as count
        FROM retweet
        WHERE tweet_id = ?`,
        [ tweetId ]
      )
      const count = retweet.count
      return +count;
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    }
}

module.exports = {
    retweetCount
}