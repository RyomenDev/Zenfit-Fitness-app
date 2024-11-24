const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdTime: {
    type: Number,
    default: () => Date.now(), // Store epoch time
  },
  // Add an id field for identification
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     unique: true,
  //   },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
