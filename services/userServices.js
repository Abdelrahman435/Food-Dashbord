const { connection } = require("../db/dbConnnection");
const util = require("util");

exports.getAllAdmins = async () => {
    const query = util.promisify(connection.query).bind(connection);
    return await query("SELECT COUNT(*) FROM users WHERE role = 'ADMIN'");
}