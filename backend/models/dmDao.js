const appDataSource = require("./orm");

const findDm = async ( id ) => {
    try {
        const [ message ] = await appDataSource.query(
            `SELECT
                *
            FROM dm
            WHERE id = ? `,
            [ id ]
        )
        return message
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const showDmList = async ( id ) => {
    try {
        const dmList = await appDataSource.query(
            `SELECT
                dm.id,
                dm.message,
                dm.image,
                dm.user1_id,
                dm.user2_id,
                us.profile_id as user1_profile,
                users.profile_id as user2_profile,
                dm.create_at
            FROM dm INNER JOIN users as us ON us.id = dm.user1_id
            INNER JOIN users ON users.id = dm.user2_id
            WHERE user1_id = ? OR user2_id = ? `,
            [ id, id ]
        )
        return dmList;
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`)
        error.statusCode = 500;
        throw error;
    }
}

const showDm = async ( id1, id2 ) => {
    try {
        const dm = await appDataSource.query(
            `SELECT
                id,
                message,
                create_at
            FROM dm
            WHERE user1_id = ? AND user2_id = ? `,
            [ id1, id2 ]
        )
        return dm;
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`)
        error.statusCode = 500;
        throw error;
    }
}

const postDm = async ( id, message, receiveUser ) => {
    try {
        return await appDataSource.query(
            `INSERT INTO dm(
                message,
                user1_id,
                user2_id
            ) VALUES (?, ?, ?); 
            `,
            [ message, id, receiveUser ]
        );
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const deleteDm = async ( id ) => {
    try {
        return await appDataSource.query(
            `DELETE
            FROM dm
            WHERE id = ? `,
            [ id ]
        );
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

module.exports = {
    findDm,
    showDmList,
    showDm,
    postDm,
    deleteDm
}