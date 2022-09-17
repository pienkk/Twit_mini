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
                tweets.reply_at,
                likes.tweet_id AS likeEX
            FROM users INNER JOIN tweets ON users.id = tweets.user_id
            LEFT JOIN likes on likes.tweet_id = tweets.id AND likes.user_id = ?
            WHERE users.id = ? `,
            [ userId , userId ]    
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
                tweets.create_at,
                likes.tweet_id AS likeEX
            FROM tweets LEFT JOIN likes ON likes.tweet_id = tweets.id
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
                tweets.create_at,
                likes.tweet_id AS likeEx
            FROM tweets INNER JOIN users ON users.id = tweets.user_id
            LEFT JOIN likes on likes.tweet_id = tweets.id AND likes.user_id = ?
            WHERE tweets.content_img != "NULL" AND users.id = ?; `,
            [ userId, userId ]    
        )
        return tweets
    } catch(err){
        const error = new Error("INVALID_DATA_INPUT");
        error.statusCode = 500;
        throw error;
    }
}

const postProfile = async (profile_nickname, profile_banner, profile_image, comment, users_id) => {
    try{
        return await appDataSource.query(`
            UPDATE users
            SET
            profile_nickname = ?,
            profile_banner = ?,
            profile_image = ?,
            comment = ?
            WHERE users.id = ${users_id}`,
            [profile_nickname, profile_banner, profile_image, comment]
        );
    } catch(err){
        const error = new Error("INVALID_DATA_INPUT");
        error.statusCode = 500;
        throw error;
    }
}


module.exports = {
    getProfile,
    getMyTweets,
    getReplyTweets,
    getLikeTweets,
    getMediaTweets,
    postProfile
}