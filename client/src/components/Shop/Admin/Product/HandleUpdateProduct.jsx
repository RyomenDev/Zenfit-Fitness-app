import { updateProduct } from "../../../../api/ShopApi";

const handleUpdateProduct = async (product, imageFile, productId, navigate) => {
  try {
    // Attempt to update the product via the API
    await updateProduct(product, imageFile, productId);

    // Log success and redirect after updating
    console.log("Product updated successfully.");
    navigate("/shop/admin/products");
  } catch (error) {
    console.error("Error during product update:", error);
  }
};

export default handleUpdateProduct;
