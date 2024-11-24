const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../../../../models/Shop/order");

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const saveUserOrder = async (req, res) => {
  console.log("Webhook received:", req.body);
  console.log("Headers:", req.headers);

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log("Webhook event verified:", event.type);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    console.log("Updating payment status");

    const session = event.data.object;
    const orderId = session.metadata.orderId; // Retrieve the order ID from metadata

    try {
      // Update the order to mark payment as completed
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        { paymentStatus: "completed" },
        { new: true }
      );

      console.log("Order updated to completed:", updatedOrder);
      res.status(200).json({ message: "Order updated to completed!" });
    } catch (error) {
      console.error("Error updating order:", error);
      return res.status(500).json({ error: "Failed to update order" });
    }
  } else {
    console.warn(`Unhandled event type: ${event.type}`);
    res.status(400).json({ message: `Unhandled event type: ${event.type}` });
  }
};

module.exports = saveUserOrder;
