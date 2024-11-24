const Product = require("../../../models/Shop/product");

// Get all products
const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find().exec(); // Added .exec() for better error handling and debugging

    if (!products.length) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = GetAllProducts;
