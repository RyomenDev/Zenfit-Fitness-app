const Product = require("../../../models/Shop/product");

// Get a specific product by ID
const GetProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).exec(); // Added .exec() for better error handling

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product:", err.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = GetProduct;
