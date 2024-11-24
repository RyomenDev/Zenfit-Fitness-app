const Cart = require("../../../../models/Shop/cart");
const handleValidationErrors = require("./handleValidationErrors");
const validateCartInput = require("./validateCartInput");

// Add or update a product in the cart
const addToCart = [
  ...validateCartInput.addToCart,
  async (req, res) => {
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
  },
];

module.exports = addToCart;
