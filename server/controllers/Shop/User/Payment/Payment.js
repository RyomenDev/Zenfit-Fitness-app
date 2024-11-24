const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = "http://localhost:5173";

const userPayment = async (req, res) => {
  const { orderInfo } = req.body;
  const cartItems = orderInfo.cartItems;
  const userId = orderInfo.userId;

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

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/shop/user/payment/success`,
      cancel_url: `${YOUR_DOMAIN}/shop/user/payment/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = userPayment;
