const Order = require("../models/Order");

const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Order deleted successfully!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete order",
      error: error.message,
    });
  }
};

module.exports = deleteOrder;
