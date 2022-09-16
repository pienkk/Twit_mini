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

module.exports = {
    getProfile,
    getMyTweets,
    getReplyTweets,
    getLikeTweets,
    getMediaTweets
}