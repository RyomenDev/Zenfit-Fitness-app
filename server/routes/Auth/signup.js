const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/user.js"); // Adjust the path based on your project structure
const responseBuilder = require("../../Utils/responseBuilder");

// Register (Signup) Handler
router.post("/signup", async (req, res) => {
  //   console.log("in signup Backend");

  const { username, password, userEmail, role } = req.body;
  //   console.log("req-Body", req.body);

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log("Username already exists");
      return res.status(400).json({ error: "Username already exists" });
    }
    // if (existingUser) {
    //   return responseBuilder.badRequest(res, "Username already exists");
    // }

    const existingEmail = await User.findOne({ userEmail });
    if (existingEmail) {
      console.log("Email already in use");
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      userEmail,
      role,
    });
    // console.log("newUser",newUser);

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
