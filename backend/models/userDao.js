const appDataSource = require("./orm");

const postProfile = async(profile_nickname, profile_banner, profile_image, comment, users_id) => {
    try{
        return await myDataSource.query(`
            UPDATE users
            SET
            profile_nickname = ?,
            profile_banner = ?,
            profile_image = ?,
            comment = ?
            WHERE users.id = ${users_id}`,
            [profile_nickname, profile_banner, profile_image, comment]
        );
    }
    catch(err){
        const error = new Error("INVALID_DATA_INPUT");
        error.statusCode = 500;
        throw error;
    }
}


const findUserToFrofileId = async ( id ) => {
    try {
        const [user] = await appDataSource.query(`
            SELECT 
                *
            FROM users
            WHERE profile_id = ? `,
            [id]
        )
        return user
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}

const signIn = async ( id ) => {
    try {
        const [user] = await appDataSource.query(
            `SELECT
                id,
                password
            FROM users
            WHERE profile_id = ? `,
            [id]
        );
        return user;
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}


const createUser = async ( id, password, birthday) => {
    try {
        return await appDataSource.query(
            `INSERT INTO users(
                profile_id,
                password,
                birthday
            ) VALUES (?, ?, ?)
            `,
            [ id, password, birthday ]
        );
    } catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
};

const searchAnyId = async ( id ) => {
    try {
        return await appDataSource.query(
            `SELECT
                profile_id,
                id,
                comment
            FROM users
            WHERE profile_id LIKE "%?%"`,
            [ id ]
        )
    } catch(err){
        const error = new Error("INVALID_DATA_INPUT");
        error.statusCode = 500;
        throw error;
    }
}

module.exports = {
    postProfile,
    signIn,
    findUserToFrofileId,
    createUser,
    searchAnyId
}