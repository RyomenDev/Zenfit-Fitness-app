const express = require("express");
const router = express.Router();
const getCart = require("../../../../controllers/Shop/User/Cart/getCart");
const addToCart = require("../../../../controllers/Shop/User/Cart/addToCart");
const clearCart = require("../../../../controllers/Shop/User/Cart/clearCart");
const removeFromCart = require("../../../../controllers/Shop/User/Cart/removeFromCart");
const updateQuantity = require("../../../../controllers/Shop/User/Cart/updateQuantity");

// Get cart by user ID
router.get("/", getCart);

// Add or update item in cart
router.post("/add", addToCart);

// Remove item from cart
router.post("/remove", removeFromCart);

// Update item quantity
router.post("/update", updateQuantity);

// Clear the cart
router.post("/clear", clearCart);

module.exports = router;
