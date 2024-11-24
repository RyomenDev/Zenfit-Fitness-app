const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../../../../models/Shop/order");
const YOUR_DOMAIN = "http://localhost:5173";

const userPayment = async (req, res) => {
  const { orderInfo } = req.body;
  const cartItems = orderInfo.cartItems;
  const shippingDetails = orderInfo.shippingDetails;
  const userId = orderInfo.userId;

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  try {
    // Create and save the order in the database
    const newOrder = new Order({
      userId,
      cartItems,
      shippingDetails,
      totalAmount,
      paymentStatus: "pending", // Initial payment status
    });

    const savedOrder = await newOrder.save();

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }));

    // Create a new Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/shop/payment/success`,
      cancel_url: `${YOUR_DOMAIN}/shop/payment/cancel`,
      metadata: {
        orderId: savedOrder._id.toString(), // Pass order ID for later reference
        userId, // Pass the userId as metadata
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = userPayment;
