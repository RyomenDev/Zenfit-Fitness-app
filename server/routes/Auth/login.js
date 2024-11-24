require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.js"); // Assuming your user model is in the models directory
const router = express.Router();

router.post("/login", async (req, res) => {
  //   console.log("in login backend");

  const { username, password } = req.body;
  //   console.log("req-body", req.body);

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    // console.log("here", process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // console.log("token", token);

    res.json({ token, user: { username: user.username, role: user.role } });

    // console.log("login successfully");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
