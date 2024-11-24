const Order = require("../models/Order");

const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const updatedOrderData = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      updatedOrderData,
      { new: true }
    );
    if (!updatedOrder) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    res.status(200).json({
      success: true,
      message: "Order updated successfully!",
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update order",
      error: error.message,
    });
  }
};

module.exports = updateOrder;
