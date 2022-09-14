const {followDao} = require("../models");
const {userDao} = require("../models");


const followUp = async ( id, profileId ) => {
    const receiveUser = await userDao.findUserToFrofileId( profileId );
    if (!receiveUser) {
        const err = new Error("상대가 없는 유저입니다.");
        err.statusCode = 400;
        throw err;
    }
    const followStatus = await followDao.findFollow( id, profileId );
    if (followStatus) {
        const err = new Error("이미 팔로우 된 유저입니다.");
        err.statusCode = 400;
        throw err;
    }
    return await followDao.followUp( id, receiveUser )
}

const followDown = async ( id, profileId ) => {
    const receiveUser = await userDao.findUserToFrofileId( profileId );
    if (!receiveUser) {
        const err = new Error("상대가 없는 유저입니다.");
        err.statusCode = 400;
        throw err;
    }
    const followStatus = await followDao.findFollow( id, profileId );
    if (!followStatus) {
        const err = new Error("팔로우가 되어있지 않습니다.");
        err.statusCode = 400;
        throw err;
    }
    return await followDao.followDown( id, receiveUser );
}

module.exports = {
    followUp,
    followDown
}