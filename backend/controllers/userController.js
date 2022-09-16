
const {userService} = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const postProfile = async (req, res) => {
    try{
        const {profile_nickname, profile_banner, profile_image, comment, users_id  } = req.body;

        if(!profile_nickname){
            return res.status(400).json({message : "profile_nickname은 필수값"});
        }

        await userService.postProfile(profile_nickname, profile_banner, profile_image, comment, users_id );
        return res.status(201).json({
            message : '프로필 등록(수정) 완료'
        });
    }
    catch(err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
        
    }
}


const signIn = asyncWrap(async (req, res) => {
    const { user_id, password } = req.body;
    if ( !user_id || !password ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err
    }
    const result = await userService.signIn( user_id, password );
    return res.status(200).json({ accessToken: result })
})

const signUp = asyncWrap(async (req, res) => {
    const { user_id, password, birthday } = req.body;
    if( !user_id || !password || !birthday ) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err
    }
    await userService.signUp( user_id, password, birthday );
    return res.status(201).json({ message: "userCreated" });
})

module.exports = {
    signIn,
    signUp,
    postProfile
}