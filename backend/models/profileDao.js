const appDataSource = require("./orm");


const getProfile = async ( userId ) => {
    try {
        const [ user ] = await appDataSource.query(
            `SELECT
                users.profile_id,
                users.profile_nickname,
                users.comment as introduce,
                users.profile_image,
                users.profile_banner as backgroundImg,
                users.create_at as join_at
            FROM users
            WHERE users.id = ? `,
            [ userId ]
        )
        return user
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT1`);
        error.statusCode = 500;
        throw error;
    }
}

const getMyTweets = async ( userId ) => {
    try {
        const tweets = await appDataSource.query(
            `SELECT
                tweets.id,
                users.profile_id,
                users.profile_nickname,
                users.profile_image,
                tweets.content,
                tweets.content_img,
                tweets.create_at,
                tweets.replyTF,
                tweets.reply_at
            FROM users INNER JOIN tweets ON users.id = tweets.user_id
            WHERE users.id = ? `,
            [ userId ]    
        )
        return tweets
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT1`);
        error.statusCode = 500;
        throw error;
    }
}

const getReplyTweets = async ( reply_at , userId ) => {
    try {
        const [tweets] = await appDataSource.query(
            `SELECT
                tweets.id,
                users.profile_id,
                users.profile_nickname,
                users.profile_image,
                tweets.content,
                tweets.content_img,
                tweets.create_at,
                tweets.replyTF,
                tweets.reply_at
            FROM users INNER JOIN tweets ON users.id = tweets.user_id
            WHERE tweets.id = ? `,
            [ reply_at ]    
        )
        return tweets
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const getLikeTweets = async ( userId ) => {
    try {
        const tweets = await appDataSource.query(
            `SELECT
                tweets.id,
                users.profile_id,
                users.profile_nickname,
                users.profile_image,
                tweets.content,
                tweets.content_img,
                tweets.create_at
            FROM tweets INNER JOIN likes ON likes.tweet_id = tweets.id 
            INNER JOIN users ON users.id = tweets.user_id
            WHERE likes.user_id = ?; `,
            [ userId ]    
        )
        return tweets
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT1`);
        error.statusCode = 500;
        throw error;
    }
}

const getMediaTweets = async ( userId ) => {
    try {
        const tweets = await appDataSource.query(
            `SELECT
                tweets.id,
                users.profile_id,
                users.profile_nickname,
                users.profile_image,
                tweets.content,
                tweets.content_img,
                tweets.create_at
            FROM tweets INNER JOIN users ON users.id = tweets.user_id
            WHERE tweets.content_img != "NULL" AND users.id = ?; `,
            [ userId ]    
        )
        return tweets
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT1`);
        error.statusCode = 500;
        throw error;
    }
}


module.exports = {
    getProfile,
    getMyTweets,
    getReplyTweets,
    getLikeTweets,
    getMediaTweets
}