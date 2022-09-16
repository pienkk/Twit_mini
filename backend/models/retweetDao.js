const appDataSource = require("./orm");

const postRetweet = async (user_id, tweet_id) => {
    console.log(user_id, tweet_id)
    try{
        console.log(user_id, tweet_id)
      return await myDataSource.query(`
        INSERT INTO retweet(
            user_id,
            tweet_id
        ) VALUES (?, ?);`,
        [user_id, tweet_id]
        );
       
    }
    catch (err) {
        const error = new Error("INVALID_DATA_INPUT(POST)");
        error.statusCode = 500;
        throw error;
    }
}

const getDataRetweet = async (user_id, tweet_id) => {
    console.log(user_id, tweet_id)
    try{
        console.log(user_id, tweet_id)
       const [a] = await myDataSource.query(`
        SELECT
        retweet.user_id,
        retweet.tweet_id 
        FROM retweet
        WHERE user_id = ${user_id} AND tweet_id = ${tweet_id}
        `);
        console.log("dao",a);
        return a;
        
    }
    catch(err){
        const error = new Error("INVALID_DATA_INPUT(GETDATARETWEET)");
        error.statusCode = 500;
        throw error;
    }
}

const removeRetweet = async (user_id, tweet_id) => {
    try{
       return await myDataSource.query(`
       DELETE FROM retweet 
       WHERE retweet.user_id = ${user_id} AND retweet.tweet_id=${tweet_id}
       `);
    }  
    catch(err){
        const error = new Error("INVALID_DATA_INPUT");
        error.statusCode = 500;
        throw error;
    }
}


const retweetCount = async ( tweetId ) => {
    try {
      const [count] =  await appDataSource.query(
        `SELECT COUNT(tweet_id) as count
        FROM retweet
        WHERE tweet_id = ?`,
        [ tweetId ]
      )
      return count;
    } catch (err) {
      const error = new Error("INVALID_DATA_INPUT");
      error.statusCode = 500;
      throw error;
    }
}

module.exports = {
    retweetCount,
    postRetweet,
    getDataRetweet,
    removeRetweet
}