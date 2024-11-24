const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
      maxlength: 100,
    },
    image: {
      type: String, // URL to the image stored in Cloudinary
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["equipment", "wearables", "accessories"], // Only one of these options can be selected
    },
    subcategory: {
      type: String, // Single subcategory
      required: true,
      enum: [
        "Cardio Machines", // For equipment
        "Free Weights",
        "Gym Strength Equipment",
        "men", // For wearables
        "women",
        "child",
        "fitness-tracker", // Accessories
        "yoga-mat",
        "Electronics",
        "Other", // Add more subcategories as needed
      ],
    },
  },
  {
    timestamps: true, // This automatically adds `createdAt` and `updatedAt`
  }
);

module.exports = mongoose.model("Product", productSchema);
