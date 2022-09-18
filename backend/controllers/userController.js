
const {userService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");


const signIn = asyncWrap(async (req, res) => {
    const { user_id, password } = req.body;
    if ( !user_id || !password ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err
    }
    const result = await userService.signIn( user_id, password );
    return res.status(200).json(result);
})

const signUp = asyncWrap(async (req, res) => {
    console.log(req.body)
    const { user_id, nickname, password, birthday } = req.body;
    if( !user_id || !nickname || !password || !birthday ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err
    }
    await userService.signUp( user_id, nickname, password, birthday );
    return res.status(201).json({ message: "userCreated" });
})

module.exports = {
    signIn,
    signUp
}