const Cart = require("../../../../models/Shop/cart");

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

module.exports = getCart;
