const appDataSource = require("./orm");

const followList = async ( userId ) => {
    try {
        return await appDataSource.query(
            `SELECT
                users.profile_id as id,
                users.profile_nickname as nickname,
                users.comment
            FROM users INNER JOIN 
            follows on users.id = follows.follow_from
            WHERE follows.follow_from = ? `,
            [ userId ]
        )
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const followerList = async ( userId ) => {
    try {
        return await appDataSource.query(
            `SELECT
                users.profile_id as id,
                users.profile_nickname as nickname,
                users.comment
            FROM users INNER JOIN 
            follows on users.id = follows.follow_to
            WHERE follows.follow_to = ? `,
            [ userId ]
        )
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const findFollow = async ( id, receiveId ) => {
    try {
        return await appDataSource.query(
            `SELECT
                *
            FROM follows
            WHERE follow_from = ? AND follow_to = ?`,
            [ id, receiveId ]
        )
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const followUp = async ( id, receiveId ) => {
    try {
        return await appDataSource.query(
            `INSERT INTO follows(
                follow_from,
                follow_to
            ) VALUES ( ?, ? )`,
            [ id, receiveId ]
        )
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const followDown = async ( id, receiveId ) => {
    try {
        return await appDataSource.query(
            `DELETE FROM follows
            WHERE follow_from = ? AND follow_to = ?`,
            [ id, receiveId ]
        )
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

module.exports = {
    followList,
    followerList,
    findFollow,
    followUp,
    followDown
}