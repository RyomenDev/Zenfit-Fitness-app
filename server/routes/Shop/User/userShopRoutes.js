const express = require("express");
const router = express.Router();

const userCartRoutes = require("./cart/userCartRoutes");
const userOrderRoutes = require("./order/userOrderRoutes");
const userPaymentRoutes = require("./Payment/userPaymentRoutes");
const userProductRoutes = require("./Product/userProductRoutes");

router.use(`/cart`, userCartRoutes);
router.use(`/order`, userOrderRoutes);
router.use(`/products`, userProductRoutes);
router.use(`/payment`, userPaymentRoutes);

module.exports = router;
