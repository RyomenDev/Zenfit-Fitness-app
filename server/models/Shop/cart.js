const mongoose = require("mongoose");

// Schema for individual cart items
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"], // Ensure quantity is positive
  },
});

// Schema for the cart
const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    items: [cartItemSchema], // Array of cart items
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
