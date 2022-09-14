const appDataSource = require("./orm");

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
    findFollow,
    followUp,
    followDown
}