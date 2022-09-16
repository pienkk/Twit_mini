const { profileService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const getProfile = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await profileService.getProfile( user_id );
    return res.status(200).json({ profile: result});
});

const getMyTweets = asyncWrap(async (req, res) => {
    const { user_id } = req.body;
    const result = await profileService.getMyTweets( user_id );
    return res.status(200).json({ tweets:result})
})

const postProfile = async (req, res) => {
    try{
        const {profile_nickname, profile_banner, profile_image, comment, users_id  } = req.body;

        if(!profile_nickname){
            return res.status(400).json({message : "profile_nickname은 필수값"});
        }

        await profileService.postProfile(profile_nickname, profile_banner, profile_image, comment, users_id );
        return res.status(201).json({
            message : '프로필 등록(수정) 완료'
        });
    }
    catch(err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
        
    }
}
module.exports = {
    getProfile,
    getMyTweets,
    postProfile
}