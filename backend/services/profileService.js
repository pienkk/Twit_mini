const {profileDao, followDao, userDao, tweetDao, likeDao, retweetDao} = require("../models");
const HOST = process.env.HOST;


const getProfile = async ( user_id ) => {
    const result = await profileDao.getProfile( user_id );
    result.follow = await followDao.followCount( user_id );
    result.follower = await followDao.followerCount( user_id );
    if ( result.profile_image != "null" && result.backgroundImg != "null" ) {
    result.profile_image = HOST+result.profile_image
    result.backgroundImg = HOST+result.backgroundImg
    }
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

    return await result
}

const getReplyTweets = async ( user_id ) => {
    const result = await profileDao.getMyTweets( user_id )
    for (el of result) {
        if (el.reply_at) {
            // console.log(el.reply_at, user_id)
            result.push( await profileDao.getReplyTweets(el.reply_at, user_id))
        }
        el.replyCount = await tweetDao.replyCount(el.id);
        el.likeCount = await likeDao.likeCount(el.id);
        el.rtCount = await retweetDao.retweetCount(el.id);
    }
    // const set = result.filter(async (el,index) => {
    //     return await result.indexOf(el.id) == index;
    // })
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

module.exports = {
    getProfile,
    getMyTweets,
    getReplyTweets,
    getLikeTweets,
    getMediaTweets
}