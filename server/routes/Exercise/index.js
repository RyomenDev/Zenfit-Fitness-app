const express = require("express");
const router = express.Router();

const userExercise = require("./User/UserExercise/userExercise");

router.use(`/user`, userExercise);

module.exports = router;
