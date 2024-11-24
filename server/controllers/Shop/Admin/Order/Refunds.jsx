const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");

router.post("/:id/refund", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    const refund = await stripe.refunds.create({
      payment_intent: order.paymentIntentId,  // Add paymentIntentId in your Order schema
    });

    order.status = "refunded";
    await order.save();

    res.json({ message: "Refund issued successfully", refund });
  } catch (error) {
    res.status(500).json({ error: "Failed to process refund" });
  }
});
