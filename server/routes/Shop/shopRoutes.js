const express = require("express");
const router = express.Router();

const userShopRoutes = require("./User/userShopRoutes");
const adminProductRoutes = require("./Admin/adminShopRoutes");

router.use(`/admin`, adminProductRoutes);
router.use(`/user`, userShopRoutes);

module.exports = router;
