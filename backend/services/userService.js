const userDao = require('../models/userDao')
const KEY = process.env.SECRETKEY;

const postProfile = async (profile_nickname, profile_banner, profile_image, comment, users_id ) => {
    
    const postProfile = await userDao.postProfile(profile_nickname, profile_banner, profile_image, comment , users_id);
    
    return postProfile;

}   

module.exports = {
    postProfile
}