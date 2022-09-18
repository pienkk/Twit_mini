const {dmService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const dmList = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await dmService.dmList( user_id );
    return res.status(200).json({ message: result })
})

const showDm = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const profileId = req.params.profileId;
    const result = await dmService.showDm( user_id, profileId );
    return res.status(200).json({ user1: result[0], user2: result[1] })
})

const postDm = asyncWrap(async (req, res) => {
    const { user_id, message } = req.body; 
    const profileId = req.params.profileId;
    if ( !message || !profileId ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err
    }
    const result = await dmService.postDm( user_id, message, profileId );
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