const express = require("express");
const router = express.Router();

router.get("/dietary-information", (req, res) => {
  // Import the necessary database library or ORM
  const mysql = require("mysql");

  // Create a connection to the MySQL database
  const connection = mysql.createConnection({
    host: "your_database_host",
    user: "your_database_user",
    password: "your_database_password",
    database: "your_database_name",
  });

  // Connect to the database
  connection.connect();

  // Retrieve dietary information from the database
  connection.query("SELECT * FROM dietary_info", (error, results) => {
    if (error) {
      // Handle the error appropriately
      console.error(error);
      res.status(500).json({
        error: "An error occurred while retrieving dietary information",
      });
    } else {
      // Send the retrieved dietary information as the response
      res.json(results);
    }
  });

  // Close the database connection
  connection.end();
});

module.exports = router;
