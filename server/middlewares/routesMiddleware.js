const express = require("express");
const routes = require("../routes/");

function routesMiddleware(app) {
  try {
    // Use the routes defined in the routes module
    app.use("/", routes);
  } catch (error) {
    console.error("Error setting up routes:", error);
  }
}

// Export the routesMiddleware function to be used in other modules
module.exports = { routesMiddleware };
