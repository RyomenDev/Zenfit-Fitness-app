const routes = require("../routes"); // Import the routes

function setupMiddlewares(app) {
  try {
    // Use the routes defined in the routes module
    app.use("/", routes); // Assuming all routes are prefixed in routes/index.js
  } catch (error) {
    console.error("Error setting up routes:", error);
  }
}

module.exports = { setupMiddlewares };
