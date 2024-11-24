const Cart = require("../../../../models/Shop/cart");
const handleValidationErrors = require("./handleValidationErrors");
const validateCartInput = require("./validateCartInput");

// Remove a product from the cart
const removeFromCart = [
  ...validateCartInput.removeFromCart,
  async (req, res) => {
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
  },
];

module.exports = removeFromCart;
