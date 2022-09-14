const {followService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const followUp = asyncWrap(async (req, res) => {
    const { id } = req.body;
    const profileId = req.params.profileId;
    if ( !profileId ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err;
    }
    await followService.followUp( id, profileId );
    return res.status(200).json({ message: "followSuccess"})
})

const followDown = asyncWrap(async (req, res) => {
    const { id } = req.body;
    const profileId = req.params.profileId;
    if ( !profileId ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err;
    }
    await followService.followDown( id, profileId );
    return res.status(204).json({ message: "Unfollow"})
})

module.exports = {
    followUp,
    followDown
}