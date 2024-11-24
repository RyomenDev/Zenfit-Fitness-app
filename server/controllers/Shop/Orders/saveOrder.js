const Order = require("../../../models/Shop/order");

// Generate a unique order number
const generateOrderNumber = () => `ORD-${Date.now()}`;

const saveOrder = async (req, res) => {
  //   console.log("saving order");

  const { cartItems, shippingDetails, userId } = req.body;

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const orderNumber = generateOrderNumber();

  try {
    const newOrder = new Order({
      userId,
      cartItems,
      shippingDetails,
      totalAmount,
      orderNumber,
      paymentStatus: "completed",
    });

    await newOrder.save();
    res.status(200).json({
      success: true,
      message: "Order saved successfully!",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save order",
      error: error.message,
    });
  }
};

module.exports = saveOrder;
