const { body } = require("express-validator");

// Middleware to validate input for cart operations
const validateCartInput = {
  addToCart: [
    body("userId").isMongoId().withMessage("Invalid user ID"),
    body("productId").isMongoId().withMessage("Invalid product ID"),
    body("quantity")
      .optional()
      .isInt({ gt: 0 })
      .withMessage("Quantity must be a positive integer"),
  ],
  removeFromCart: [
    body("userId").isMongoId().withMessage("Invalid user ID"),
    body("productId").isMongoId().withMessage("Invalid product ID"),
  ],
  updateQuantity: [
    body("userId").isMongoId().withMessage("Invalid user ID"),
    body("productId").isMongoId().withMessage("Invalid product ID"),
    body("quantity")
      .isInt({ gt: 0 })
      .withMessage("Quantity must be a positive integer"),
  ],
  clearCart: [body("userId").isMongoId().withMessage("Invalid user ID")],
};

module.exports = validateCartInput;
