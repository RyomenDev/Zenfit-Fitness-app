const Order = require("../../../models/Shop/order");
const Cart = require("../../../models/Shop/cart");
const { body, validationResult } = require("express-validator");

// Middleware to validate input for order creation
const validateOrderInput = [
  body("userId").isMongoId().withMessage("Invalid user ID"),
  body("items").isArray().withMessage("Items must be an array"),
  body("totalAmount")
    .isFloat({ gt: 0 })
    .withMessage("Total amount must be a positive number"),
];

// Utility function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Create a new order
exports.createOrder = [
  validateOrderInput,
  async (req, res) => {
    handleValidationErrors(req, res, async () => {
      const { userId, items, totalAmount } = req.body;

      try {
        const newOrder = new Order({ userId, items, totalAmount });
        await newOrder.save();

        // Optionally clear the cart after placing an order
        await Cart.findOneAndDelete({ userId });

        res.status(201).json(newOrder);
      } catch (error) {
        console.error("Error creating order:", error.message);
        res.status(500).json({ error: "Failed to create order" });
      }
    });
  },
];

// Get all orders for a specific user
exports.getOrdersForUser = async (req, res) => {
  const { userId } = req.params;

  if (!userId || !/^[0-9a-fA-F]{24}$/.test(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const orders = await Order.find({ userId });
    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ error: "Failed to get orders" });
  }
};
