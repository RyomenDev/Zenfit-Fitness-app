const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "hostname", // Replace with your MySQL host
  port: "port", // Replace with your MySQL port (usually 3306)
  user: "username", // Replace with your MySQL username
  password: "password", // Replace with your MySQL password
  database: "myproject", // Replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as ID " + connection.threadId);
});

module.exports = connection;
