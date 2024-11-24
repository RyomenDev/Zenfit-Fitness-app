const Cart = require("../../../../models/Shop/cart");
const handleValidationErrors = require("./handleValidationErrors");
const validateCartInput = require("./validateCartInput");

// Update product quantity in the cart
const updateQuantity = [
  ...validateCartInput.updateQuantity,
  async (req, res) => {
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
  },
];

module.exports = updateQuantity;
