const express = require("express");
const router = express.Router();

const userPayment = require("../../../../controllers/Shop/User/Payment/Payment");

// Route to create payment intent
router.post("/create-payment-intent", userPayment);

module.exports = router;

// const saveUserOrder = require("../../../controllers/Shop/User/Order/saveUserOrder");
// router.post("/order", saveUserOrder);
