const mongoose = require("mongoose");
const Exercise = require("../../../../models/exercise.js");

const DeleteExercise = async (req, res) => {
  try {
    const exerciseId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(exerciseId)) {
      return res.status(400).json({ message: "Invalid exercise ID" });
    }

    const loggedInUserId = req.query.loggedInUserId;
    const exercise = await Exercise.findById(exerciseId);

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    if (exercise.userId.toString() !== loggedInUserId) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this exercise" });
    }

    await exercise.deleteOne();
    res.json({ message: "Exercise deleted successfully" });
  } catch (err) {
    console.error(`Error deleting exercise: ${err.message}`);
    res.status(500).json({ message: "Failed to delete exercise" });
  }
};

module.exports = DeleteExercise;
