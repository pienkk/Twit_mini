const {profileDao, followDao, userDao, tweetDao, likeDao, retweetDao} = require("../models");

const getProfile = async ( user_id ) => {
    const result = await profileDao.getProfile( user_id );
    const follow = await followDao.followCount( user_id );
    const follower = await followDao.followerCount( user_id );
    result.follow = follow.follow;
    result.follower = follower.follower;
    return result
}

const getMyTweets = async ( user_id ) => {
    const result = await profileDao.getMyTweets( user_id );
    async function getMessage() {
        const result2 = await Promise.all(
            result.map(async el => {
                const comments = await tweetDao.replyCount(el.id);
                const like = await likeDao.likeCount(el.id);
                const retweet = await retweetDao.retweetCount(el.id);
                el.commentsNum = comments.count;
                el.likesNum = like.count;
                el.retweetNum = retweet.count;
            // console.log(el)
            })
        )
        return result2
    }
    const bbb = await getMessage();
    console.log(bbb)

    return await bbb
}


const postProfile = async (
    profile_nickname, profile_banner, profile_image, comment, users_id ) => {
    const postProfile = await profileDao.postProfile(
        profile_nickname, profile_banner, profile_image, comment , users_id);
    return postProfile;
}  

module.exports = {
    getProfile,
    getMyTweets,
    postProfile
}