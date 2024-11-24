const Exercise = require("../../../../models/exercise.js");
const validator = require("validator");

const CreateExercise = async (req, res) => {
  try {
    const { name, calories, date, duration } = req.body;
    const userId = req.query.id;

    // Validate input fields
    if (!validator.isLength(name, { min: 2, max: 50 })) {
      return res
        .status(400)
        .json({ error: "Exercise name must be between 2 and 50 characters" });
    }
    if (!validator.isInt(String(duration), { min: 1 })) {
      return res.status(400).json({
        error: "Invalid duration value, must be an integer greater than 0",
      });
    }
    if (!validator.isInt(String(calories), { min: 1 })) {
      return res.status(400).json({
        error: "Invalid calories value, must be an integer greater than 0",
      });
    }
    if (!validator.isDate(date)) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    // Create and save the exercise
    const exercise = new Exercise({ userId, name, calories, date, duration });
    const newExercise = await exercise.save();
    res
      .status(201)
      .json({ message: "Exercise saved successfully", exercise: newExercise });
  } catch (error) {
    console.error("Failed to save exercise", error);
    res.status(500).json({ message: "Failed to save exercise" });
  }
};

module.exports = CreateExercise;
