const {userDao} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const KEY = process.env.KEY;
const HOST = process.env.HOST;


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
    if (user.profile_image != "null") {
        user.profile_image = HOST+user.profile_image
    }
    const jwtToken = jwt.sign(userId, KEY);
    const result = {
        accessToken : jwtToken, 
        userId : user.profile_id, 
        userNickname : user.profile_nickname,
        userProfileImg : user.profile_image
    }
    return result
}

const signUp = async ( id, nickname, password, birthday ) => {
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
        nickname,
        hashPassword,
        birthday
    );
    return createUser;
};


module.exports = {
    signIn,
    signUp
}