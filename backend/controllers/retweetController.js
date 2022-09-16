const retweetService = require('../services/retweetService');

const postRetweet = async (req, res) => {
    try{
        const {user_id, tweet_id} = req.body;

        if(!user_id || !tweet_id){
            return res.status(400).json({message : "리트윗할 게시글 확인이 필요합니다"});
        }

    
        await retweetService.postRetweet(user_id, tweet_id);

        return res.status(201).json({
            message : '리트윗 완료'
        });
    }
    catch(err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  
    }
}

const removeRetweet = async (req, res) => {
    try{
        const {user_id, tweet_id} = req.body;

        if(!user_id || !tweet_id) {
            return res.status(400).json({message : "user_id 와 tweet_id는 필수값입니다"});
        }
        await retweetService.removeRetweet(user_id, tweet_id);

        return res.status(201).json({
            message : '리트윗 삭제 완료'
        });
    }
    catch(err){
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  
    }
}

module.exports = {
    postRetweet,
    removeRetweet
}