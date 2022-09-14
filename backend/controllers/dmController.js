const {dmService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const dmList = asyncWrap(async (req, res) => {
    const { id } = req.body;
    const result = await dmService.dmList( id );
    return res.status(200).json({ message: result })
})

const showDm = asyncWrap(async (req, res) => {
    const { id } = req.body;
    const profileId = req.params.profileId;
    const result = await dmService.showDm( id, profileId );
    return res.status(200).json({ user1: result[0], user2: result[1] })
})

const postDm = asyncWrap(async (req, res) => {
    const { id, message } = req.body; // 토큰에서 id 빼옴
    const profileId = req.params.profileId;
    if ( !message || !profileId ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err
    }
    const result = await dmService.postDm( id, message, profileId );
    return res.status(200).json({ accessToken: result })
})

const deleteDm = asyncWrap(async (req, res) => {
    const dmId = req.params.dmId;
    await dmService.deleteDm( dmId );
    return res.status(204).json({ message: "message Delete"})
})




module.exports = {
    dmList,
    showDm,
    postDm,
    deleteDm
}