const {userDao} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const KEY = process.env.KEY;


const postProfile = async (profile_nickname, profile_banner, profile_image, comment, users_id ) => {
    const postProfile = await userDao.postProfile(profile_nickname, profile_banner, profile_image, comment , users_id);
    return postProfile;

}  

const signIn = async ( id, password ) => {
    const user = await userDao.signIn(id);
    const checkHash = async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    }
    const checkPassword = await checkHash(password, user.password);
    if(!checkPassword) {
        const err = new Error(`유저 정보가 일치하지 않습니다.`);
        err.statusCode = 400;
        throw err;
    }
    const userId = {
        user_id : user.id
    }
    const jwtToken = jwt.sign(userId, KEY);
    return jwtToken
}

const signUp = async ( id, password, birthday ) => {
    const user = await userDao.findUserToFrofileId(id);
    if(user){
        const err = new Error('이미 가입된 아이디 입니다.')
        err.statusCode = 400;
        throw err;
    }
    const idValidation = new RegExp(
        `^[a-zA-Z0-9_-]{4,10}$`
    );
    if(!idValidation.test(id)) {
        const err = new Error(`ID_IS_NOT_VALID`);
        err.statusCode = 400;
        throw err;
    }
    const pwValidation = new RegExp(
        `^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})`
    );
    if(!pwValidation.test(password)) {
        const err = new Error(`PASSWORD_IS_NOT_VALID`);
        err.statusCode = 400;
        throw err;
    }
    const makeHash = async (password, saltRound) => {
        return await bcrypt.hash(password, saltRound);
    }
    const hashPassword = await makeHash(password,10);

    const createUser = await userDao.createUser(
        id,
        hashPassword,
        birthday
    );
    return createUser;
};


module.exports = {
    signIn,
    signUp,
    postProfile
}