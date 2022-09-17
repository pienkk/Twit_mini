const { profileService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const getProfile = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await profileService.getProfile( user_id );
    return res.status(200).json({ profile: result });
});

const getMyTweets = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await profileService.getMyTweets( user_id );
    return res.status(200).json({ tweets:result })
})

const getReplyTweets = asyncWrap(async (req, res) => {
    console.log(req.body);
    const { user_id } = req.body;
    const result = await profileService.getReplyTweets( user_id );
    return res.status(200).json({ tweets:result })
})

const getLikeTweets = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await profileService.getLikeTweets( user_id );
    return res.status(200).json({ tweets:result })
})

const getMediaTweets = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await profileService.getMediaTweets( user_id );
    return res.status(200).json({ tweets:result })
})

const postProfile = asyncWrap(async (req, res) => {
    const { profile_nickname, comment, user_id  } = req.body;
    const images = req.files
    if(!profile_nickname){
        return res.status(400).json({message : "profile_nickname은 필수값"});
    }
    await profileService.postProfile(profile_nickname, comment, user_id, images);
    return res.status(201).json({message : '프로필 등록(수정) 완료'});
})

module.exports = {
    getProfile,
    getMyTweets,
    getReplyTweets,
    getLikeTweets,
    getMediaTweets,
    postProfile
}