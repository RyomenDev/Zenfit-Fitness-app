const Cart = require("../../../../models/Shop/cart");
const handleValidationErrors = require("./handleValidationErrors");
const validateCartInput = require("./validateCartInput");

// Clear the cart
const clearCart = [
  ...validateCartInput.clearCart,
  async (req, res) => {
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
  },
];

module.exports = clearCart;
