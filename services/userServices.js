const { connection } = require("../db/dbConnnection");
const util = require("util");


exports.getAllAdmins = async () => {
    const query = util.promisify(connection.query).bind(connection);
    return await query("SELECT COUNT(*) FROM users WHERE role = 'ADMIN'");
}


exports.editProfile = async (data, id) => {
    const query = util.promisify(connection.query).bind(connection);
    return await query("UPDATE users SET ? WHERE id = ?", [data, id]);
  };

exports.getAdmin = async (id) => {
    const query = util.promisify(connection.query).bind(connection);
    return await query("SELECT * FROM users WHERE id = ?", [id]);
}