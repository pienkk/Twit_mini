const retweetDao = require('../models/retweetDao')

const postRetweet = async (user_id, tweet_id) => {

    const getDataRetweet = await retweetDao.getDataRetweet(user_id, tweet_id);
    console.log("aaaaaa")
    console.log(getDataRetweet) 
    if(getDataRetweet) {
        const err = new Error ('이미 리트윗 된 글입니다');
        err.statusCode = 418;
        throw err;
    }
    return await retweetDao.postRetweet(user_id, tweet_id);
}


const removeRetweet = async (user_id, tweet_id) => {
    
    const getDataRetweet = await retweetDao.getDataRetweet(user_id, tweet_id);
    console.log(getDataRetweet)
    if(!getDataRetweet){
        const err = new Error ('삭제할 리트윗 게시글이 없습니다')
        err.statusCode = 418;
        throw err;
    }
    return await retweetDao.removeRetweet(user_id, tweet_id);
}

module.exports = {
    postRetweet,
    removeRetweet
}