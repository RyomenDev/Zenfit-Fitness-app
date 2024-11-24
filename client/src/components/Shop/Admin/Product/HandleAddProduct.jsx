import { addProduct } from "../../../../api/shopApi";

const handleAddProduct = async (product, imageFile, navigate) => {
  try {
    // Attempt to add the product via the API
    await addProduct(product, imageFile);

    // Log success and redirect after adding
    console.log("Product added successfully.");
    navigate("/shop/admin/products");
  } catch (error) {
    console.error("Error during product addition:", error);
  }
};

export default handleAddProduct;


