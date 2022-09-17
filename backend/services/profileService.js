const {profileDao, followDao, userDao, tweetDao, likeDao, retweetDao} = require("../models");
const HOST = process.env.HOST;


const getProfile = async ( user_id ) => {
    const result = await profileDao.getProfile( user_id );
    result.follow = await followDao.followCount( user_id );
    result.follower = await followDao.followerCount( user_id );
    
    return result
}

const getMyTweets = async ( user_id ) => {
    const result = await profileDao.getMyTweets( user_id );
    // const getMessage = async () =>  {
        // const result2 = await Promise.all(
        //     result.map(async el => {
                // const comments = await tweetDao.replyCount(el.id);
                // const like = await likeDao.likeCount(el.id);
                // const retweet = await retweetDao.retweetCount(el.id);
                // el.commentsNum = comments.count;
                // el.likesNum = like.count;
                // el.retweetNum = retweet.count;
        //     // console.log(el)
        //     })
        // )
        for (el of result) {
            el.replyCount = await tweetDao.replyCount(el.id);
            el.likeCount = await likeDao.likeCount(el.id);
            el.rtCount = await retweetDao.retweetCount(el.id);
                // const comments = await tweetDao.replyCount(el.id);
                // const like = await likeDao.likeCount(el.id);
                // const retweet = await retweetDao.retweetCount(el.id);
                // // el.commentsNum = comments.count;
                // el.likesNum = like.count;
                // el.retweetNum = retweet.count;
        }
    //     return result2
    // }
    // const bbb = await getMessage();
    // console.log(result)

    return result
}

const getReplyTweets = async ( user_id ) => {
    const result = await profileDao.getMyTweets( user_id )
    for (el of result) {
        if (el.reply_at) {
            result.push( await profileDao.getReplyTweets(el.reply_at, user_id))
        }
        el.replyCount = await tweetDao.replyCount(el.id);
        el.likeCount = await likeDao.likeCount(el.id);
        el.rtCount = await retweetDao.retweetCount(el.id);
    }
    return result;
}

const getLikeTweets = async ( user_id ) => {
    const result = await profileDao.getLikeTweets( user_id );
    for (el of result) {
        el.replyCount = await tweetDao.replyCount(el.id);
        el.likeCount = await likeDao.likeCount(el.id);
        el.rtCount = await retweetDao.retweetCount(el.id);
    }
    return result;
}

const getMediaTweets = async ( user_id ) => {
    const result = await profileDao.getMediaTweets( user_id );
    for (el of result) {
        el.replyCount = await tweetDao.replyCount(el.id);
        el.likeCount = await likeDao.likeCount(el.id);
        el.rtCount = await retweetDao.retweetCount(el.id);
    }
    return result;
}


const postProfile = async (profile_nickname, comment, user_id, images ) => {
    let profile_image = null;
    let profile_banner = null;
    if (images && images.profile_img) {
        profile_image = HOST+images.profile_img[0].filename;
    }
    if (images && images.backgroundImg) {
        profile_banner = HOST+images.backgroundImg[0].filename;
    }
    const postProfile = await profileDao.postProfile(
        profile_nickname, profile_banner, profile_image, comment , user_id);
        console.log(postProfile)
    return postProfile;
}  

module.exports = {
    getProfile,
    getMyTweets,
    getReplyTweets,
    getLikeTweets,
    getMediaTweets,
    postProfile
}