const { DataSource } = require("typeorm");

const myDataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
})

myDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error occurred during Data Source initialization", err);
		myDataSource.destroy();
	});


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

module.exports = {
    postProfile
}