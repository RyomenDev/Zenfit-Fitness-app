const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate usernames
  },
  password: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails
  },
  role: {
    type: String,
    enum: ["Admin", "User", "CustomerCare"],
    default: "User",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
