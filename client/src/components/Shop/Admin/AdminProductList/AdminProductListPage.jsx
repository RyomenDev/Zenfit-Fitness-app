import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, deleteProduct } from "../../../../api/ShopApi";
import ProductCategory from "./ProductCategory";

const AdminProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
        groupProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const groupProducts = (products) => {
    const grouped = {};
    products.forEach((product) => {
      const { category = "Uncategorized", subcategory = "Uncategorized" } =
        product;

      if (!grouped[category]) {
        grouped[category] = {};
      }

      if (!grouped[category][subcategory]) {
        grouped[category][subcategory] = [];
      }

      grouped[category][subcategory].push(product);
    });
    setGroupedProducts(grouped);
  };

  const handleDelete = async (id, imgId) => {
    try {
      await deleteProduct(id, imgId);
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
      groupProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <Link
          to="/shop/admin/products/add"
          className="bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-700"
        >
          Add New Product
        </Link>
      </div>

      {Object.keys(groupedProducts).length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          No products available.
        </p>
      ) : (
        Object.entries(groupedProducts).map(([category, subcategories]) => (
          <ProductCategory
            key={category}
            category={category}
            subcategories={subcategories}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default AdminProductListPage;
