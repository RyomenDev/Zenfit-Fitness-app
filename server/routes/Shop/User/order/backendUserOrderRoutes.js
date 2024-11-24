const express = require("express");
const router = express.Router();
const saveUserOrder = require("../../../../controllers/Shop/User/Order/saveUserOrder");

router.post("/save-order", saveUserOrder);

module.exports = router;

// Webhook route to handle order saving after payment success
// router.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   saveUserOrder
// );
