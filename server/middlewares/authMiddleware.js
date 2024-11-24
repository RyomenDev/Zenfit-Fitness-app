const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_jwt_secret_key"; // Store securely in environment variables

// Middleware to check if user is authenticated
exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
