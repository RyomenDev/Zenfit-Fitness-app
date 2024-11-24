const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    imageText: { type: String },
    category: { type: String, required: true },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

module.exports = mongoose.model("Blog-Posts", PostSchema);
