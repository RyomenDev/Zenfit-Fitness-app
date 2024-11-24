const Product = require("../../../models/Shop/product");
const { uploadImage, deleteImage } = require("../../../Utils/uploadRoutes");

const folderName = process.env.CLOUDINARY_SHOP_FOLDER;

// Update a specific product by ID
const UpdateProduct = async (req, res) => {
  console.log("updating-product");

  try {
    // Find the existing product
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Destructure fields from request
    const {
      name,
      description,
      price,
      subcategory,
      category,
      shortDescription,
    } = req.query;

    // Prepare fields to be updated
    let updatedFields = {
      name,
      description,
      price,
      subcategory,
      category,
      shortDescription,
    };

    // Handle image update if a new file is provided
    if (req.file) {
      // Upload the new image and get URL
      const newImageUrl = await uploadImage(req.file, folderName);

      // Delete the old image from Cloudinary if it exists
      if (product.image) {
        await deleteImage(product.image, folderName);
      }

      // Add new image URL to updated fields
      updatedFields.image = newImageUrl;
    }

    // Update the product in the database
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Respond with the updated product
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error("Error updating product:", err.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = UpdateProduct;
