const appDataSource = require("./orm");


const getProfile = async ( userId ) => {
    try {
        const [ user ] = await appDataSource.query(
            `SELECT
                users.profile_id as userId,
                users.profile_nickname as nickname,
                users.comment as introduce,
                users.profile_image as profileImg,
                users.profile_banner as backgroundImg,
                users.create_at as joinDate
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
                tweets.id,users.profile_id as userId,
                users.profile_nickname as profileImg,
                users.profile_image as profileImg,
                tweets.content as tweetText,
                tweets.content_img as tweetImg,
                tweets.create_at as uploadDate
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


module.exports = {
    getProfile,
    getMyTweets
}