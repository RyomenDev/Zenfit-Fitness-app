const express = require("express");
const Order = require("../../../../models/Shop/order");

const generateOrderNumber = () => {
  // Generate a unique order number (customize as needed)
  return `ORD-${Date.now()}`; // Using timestamp for uniqueness
};

const saveOrder = async (req, res) => {
  const { cartItems, shippingDetails, userId } = req.body;

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  // Generate the order number
  const orderNumber = generateOrderNumber();
  console.log("Generated Order Number:", orderNumber);

  try {
    const newOrder = new Order({
      userId: userId,
      cartItems: cartItems,
      shippingDetails: shippingDetails,
      totalAmount: totalAmount,
      orderNumber: orderNumber, // Assign unique order number
      paymentStatus: "completed", // Assuming payment is successful
    });

    // Check for null orderNumber
    if (!newOrder.orderNumber) {
      throw new Error("Order number is null");
    }

    await newOrder.save();
    res.status(200).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
};

module.exports = saveOrder;
