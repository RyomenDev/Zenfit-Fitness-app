const Exercise = require("../../../../models/exercise.js");

const EditExercise = async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const { userId, name, calories, date, duration } = req.body;
    const loggedInUserId = req.query.loggedInUserId.toString();

    if (userId !== loggedInUserId) {
      return res
        .status(403)
        .json({ error: "Not authorized to edit this exercise" });
    }

    const updatedExerciseData = { name, calories, date, duration };

    const updatedExercise = await Exercise.findByIdAndUpdate(
      exerciseId,
      updatedExerciseData,
      { new: true }
    );

    if (!updatedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    res.json(updatedExercise);
  } catch (err) {
    console.error("Error updating exercise:", err);
    res.status(500).json({ message: "Failed to update exercise" });
  }
};

module.exports = EditExercise;
