const {userService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");


const signIn = asyncWrap(async (req, res) => {
    const { id, password } = req.body;
    if ( !id || !password ) {
        return res.status(400).json({ message : "KEY_ERROR" })
    }
    const result = await userService.signIn( id, password );
    return res.status(200).json({ accessToken: result })
})

const signUp = asyncWrap(async (req, res) => {
    const { id, password, birthday } = req.body;
    if( !id || !password || !birthday ) {
        return res.status(400).json({ message: "KEY_ERROR"});
    }
    await userService.signUp( id, password, birthday );
    res.status(201).json({ message: "userCreated" });
})

module.exports = {
    signIn,
    signUp
}