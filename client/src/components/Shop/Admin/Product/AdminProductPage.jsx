import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductById,
  addProduct,
  updateProduct,
} from "../../../../api/ShopApi";
import ProductForm from "./ProductForm";

const AdminProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id: productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      setLoading(true);
      fetchProductById(productId)
        .then((response) => {
          setProduct(response.data);
          setEditMode(true);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateProduct(product, imageFile, productId);
      } else {
        await addProduct(product, imageFile);
      }
      navigate("/shop/admin/products");
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-gray-600">Loading product details...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-xl bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        {editMode ? "Edit Product" : "Add New Product"}
      </h1>
      <ProductForm
        product={product}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        editMode={editMode}
      />
    </div>
  );
};

export default AdminProductPage;
