// queries.js
const connection = require("../config/mySQLdb");

// Example query function
function getUsers(callback) {
  const sql = "SELECT * FROM users";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

module.exports = {
  getUsers,
};
