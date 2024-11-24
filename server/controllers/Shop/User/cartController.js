const Cart = require("../../../models/Shop/cart");
const { body, validationResult } = require("express-validator");

// Middleware to validate input
const validateCartInput = [
  body("userId").isMongoId().withMessage("Invalid user ID"),
  body("productId").isMongoId().withMessage("Invalid product ID"),
  body("quantity")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Quantity must be a positive integer"),
];

// Utility function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Add or update a product in the cart
const addToCart = async (req, res) => {
  handleValidationErrors(req, res, async () => {
    const { userId, productId, quantity = 1 } = req.body;

    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }

      const existingProduct = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }

      await cart.save();
      res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update cart" });
    }
  });
};

// Remove a product from the cart
const removeFromCart = async (req, res) => {
  handleValidationErrors(req, res, async () => {
    const { userId, productId } = req.body;

    try {
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.items = cart.items.filter(
        (item) => item.product.toString() !== productId
      );

      await cart.save();
      res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
      res.status(500).json({ error: "Failed to remove product from cart" });
    }
  });
};

// Update product quantity in the cart
const updateQuantity = async (req, res) => {
  handleValidationErrors(req, res, async () => {
    const { userId, productId, quantity } = req.body;

    try {
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const item = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (item) {
        if (quantity <= 0) {
          cart.items = cart.items.filter(
            (item) => item.product.toString() !== productId
          );
        } else {
          item.quantity = quantity;
        }

        await cart.save();
        res.status(200).json({ message: "Quantity updated successfully" });
      } else {
        res.status(404).json({ message: "Product not found in cart" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update quantity" });
    }
  });
};

// Clear the cart
const clearCart = async (req, res) => {
  handleValidationErrors(req, res, async () => {
    const { userId } = req.body;

    try {
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.items = [];
      await cart.save();
      res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to clear cart" });
    }
  });
};

// Get the cart for a user
const getCart = async (req, res) => {
  const { userId } = req.query;

  if (!userId || !/^[0-9a-fA-F]{24}$/.test(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const cart = await Cart.findOne({ userId }).populate("items.product");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItems = cart.items.map((item) => ({
      ...item.product._doc,
      qty: item.quantity,
    }));

    res.status(200).json({ cart: cartItems });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  getCart,
};
