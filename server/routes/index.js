const express = require("express");
const router = express.Router();

const Auth = require("./Auth/authRoutes");
const Shop = require("./Shop//shopRoutes");
const Exercise = require("./Exercise");
// const Blog = require("./Blog/blog");

router.use("/auth", Auth);
router.use("/exercise", Exercise);
router.use(`/shop`, Shop);
// router.use(`/blog`, Blog);

module.exports = router;
