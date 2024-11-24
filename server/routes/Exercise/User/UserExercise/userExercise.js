const express = require("express");
const router = express.Router();

const createExercise = require("../../../../controllers/Exercise/User/UserExercise/CreateExercise");
const editExercise = require("../../../../controllers/Exercise/User/UserExercise/EditExercise");
const deleteExercise = require("../../../../controllers/Exercise/User/UserExercise/DeleteExercise");
const getUserExercise = require("../../../../controllers/Exercise/User/UserExercise/getUserExercise");

// Define all routes
router.post("/exercise", createExercise);
router.get("/exercise", getUserExercise);
router.put("/exercise/:id", editExercise);
router.delete("/exercise/:id", deleteExercise);

module.exports = router;
