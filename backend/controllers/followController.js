const {followService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const followList = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const follow = await followService.followList( user_id );
    return res.status(200).json({ list: follow })
})

const followerList = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const follow = await followService.followerList( user_id );
    return res.status(200).json({ list: follow })
})

const followUp = asyncWrap(async (req, res) => {
    const { user_id, profile_id } = req.body;
    if ( !profile_id ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err;
    }
    await followService.followUp( user_id, profile_id );
    return res.status(200).json({ message: "팔로우 성공"})
})

const followDown = asyncWrap(async (req, res) => {
    const { user_id, profile_id } = req.body;
    if ( !profile_id ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err;
    }
    await followService.followDown( user_id, profile_id );
    return res.status(204).json({ message: "언팔로우 성공"})
})

module.exports = {
    followList,
    followerList,
    followUp,
    followDown
}