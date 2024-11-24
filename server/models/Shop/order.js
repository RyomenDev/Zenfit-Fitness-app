const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    cartItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    shippingDetails: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
      },
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Export the Order model
module.exports = mongoose.model("Order", orderSchema);
