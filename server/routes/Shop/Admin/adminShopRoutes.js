const express = require("express");
const router = express.Router();

const productRoutes = require("./Product/adminProductRoutes");

router.use(`/products`, productRoutes);

module.exports = router;
