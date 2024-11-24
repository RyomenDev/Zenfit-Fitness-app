const Order = require("../models/Order");

const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId).populate("cartItems.productId");
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch order details",
      error: error.message,
    });
  }
};

module.exports = getOrderDetails;
