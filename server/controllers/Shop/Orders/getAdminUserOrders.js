const Order = require("../models/Order");

const getAdminUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).populate("cartItems.productId");
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

module.exports = getAdminUserOrders;
