const Product = require("../../../models/Shop/product");
const { deleteImage } = require("../../../Utils/uploadRoutes");

// Delete a specific product by ID
const DeleteProduct = async (req, res) => {
  try {
    // Find and delete the product by ID
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      // Product not found
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete the associated image from Cloudinary if it exists
    if (deletedProduct.image) {
      await deleteImage(deletedProduct.image);
    }

    // Respond with success message
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    // Log and respond with error
    console.error("Error deleting product:", err.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = DeleteProduct;
