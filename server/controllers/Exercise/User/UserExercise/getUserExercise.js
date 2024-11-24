const Exercise = require("../../../../models/exercise.js");

const GetUserExercise = async (req, res) => {
  //   console.log("getUserExercise");
  try {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ error: "Missing userId parameter" });
    }

    const exercises = await Exercise.find({ userId });
    res.json(exercises);
  } catch (error) {
    console.error("Failed to retrieve exercises", error);
    res.status(500).json({ error: "Failed to retrieve exercises" });
  }
};

module.exports = GetUserExercise;
