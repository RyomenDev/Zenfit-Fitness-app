const express = require("express");
const router = express.Router();

const signup = require("./signup");
const login = require("./login");

router.use(signup);
router.use(login);

module.exports = router;
