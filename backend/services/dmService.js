const {dmDao} = require("../models");
const {userDao} = require("../models");

const dmList = async ( id ) => {
    const dmList = await dmDao.showDmList( id );
    return dmList

}

const showDm = async ( id, profileId ) => {
    const receiveUser = await userDao.findUserToFrofileId(profileId)
    if (!receiveUser) {
        const err = new Error("상대가 없는 유저 입니다.");
        err.statusCode = 400;
        throw err;
    }
    const mainUser = await dmDao.showDm( id, receiveUser.id );
    const subUser = await dmDao.showDm( receiveUser.id, id );

    return [ mainUser, subUser ]
}

const dmPost = async ( id, message, profileId ) => {
    const receiveUser = await userDao.findUserToFrofileId(profileId)
    if (!receiveUser) {
        const err = new Error("상대가 없는 유저 입니다.");
        err.statusCode = 400;
        throw err;
    }

    const result = await dmDao.postDm(id, message, receiveUser)
    return result
}

const deleteDm = async ( dmId ) => {
    const fileDm = await dmDao.findDm( dmId )
    if (!fileDm) {
        const err = new Error("존재 하지 않는 메시지 입니다.");
        err.statusCode = 400;
        throw err;
    }
    const result = await dmDao.deleteDm( dmId )
    return result
}
module.exports = {
    dmList,
    showDm,
    dmPost,
    deleteDm
}