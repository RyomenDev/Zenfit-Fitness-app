const Product = require("../../../models/Shop/product");
const { uploadImage } = require("../../../Utils/uploadRoutes");

const folderName = process.env.CLOUDINARY_SHOP_FOLDER;

const AddProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      subcategory,
      category,
      shortDescription,
    } = req.query;
    let imageUrl = "";
    // Validate all required fields
    if (
      !name ||
      !description ||
      !price ||
      !subcategory ||
      !category ||
      !shortDescription
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }
    // Validate price
    if (isNaN(price) || Number(price) <= 0) {
      return res
        .status(400)
        .json({ error: "Price must be a positive number." });
    }
    // Handle image upload
    if (req.file) {
      try {
        imageUrl = await uploadImage(req.file, folderName);
      } catch (err) {
        console.error("Image upload failed:", err.message);
        return res.status(500).json({ error: "Image upload failed." });
      }
    } else {
      return res.status(400).json({ error: "Product image is required." });
    }
    // Create and save new product
    const newProduct = new Product({
      name,
      description,
      price: Number(price), // Ensure price is a number
      subcategory,
      category,
      shortDescription,
      image: imageUrl,
    });
    console.log("newProduct", newProduct);

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error adding product:", err.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = AddProduct;
