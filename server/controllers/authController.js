const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Adjust path as needed

const JWT_SECRET = "your_jwt_secret_key"; // Store securely in environment variables

// Login Handler
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Logout Handler
exports.logout = (req, res) => {
  // No server-side action needed for logout with token-based auth
  res.status(200).json({ message: "Logged out successfully" });
};

// Register Handler
exports.register = async (req, res) => {
  const { username, password, userEmail, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      userEmail,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
