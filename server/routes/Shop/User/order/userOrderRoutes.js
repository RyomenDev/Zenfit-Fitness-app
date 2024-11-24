const express = require("express");
const router = express.Router();

// Import controllers
const saveOrder = require("../../../../controllers/Shop/Orders/saveOrder");
// const getAdminUserOrders = require("../controllers/getAdminUserOrders");
// const getOrderDetails = require("../controllers/getOrderDetails");
// const updateOrder = require("../controllers/updateOrder");
// const deleteOrder = require("../controllers/deleteOrder");

// Routes
router.post("/save-order", saveOrder);
// router.get("/user-orders/:userId", getAdminUserOrders);
// router.get("/order-details/:orderId", getOrderDetails);
// router.put("/update-order/:orderId", updateOrder);
// router.delete("/delete-order/:orderId", deleteOrder);

module.exports = router;
