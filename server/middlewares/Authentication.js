require("dotenv").config();
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

// Authentication middleware
function authenticate(req, res, next) {
  console.log("Entering authentication middleware");

  // Extract the token from the Authorization header
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Missing token" });
  }

  try {
    // Verify the token using the secret key
    const { userId, userEmail } = jwt.verify(token, JWT_SECRET);

    // Attach the userId to the request object for use in other routes
    req.userId = userId;

    console.log("Authenticated userId:", userId);
    console.log("Authenticated userEmail:", userEmail);

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error verifying token:", error.message);
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = {
  authenticate,
};
