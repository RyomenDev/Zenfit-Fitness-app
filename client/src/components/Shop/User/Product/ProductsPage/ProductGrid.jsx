import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartActions } from "../../Cart/Store";
import toast from "react-hot-toast";

// Shimmer UI component for loading state
const ShimmerCard = () => (
  <div className="animate-pulse border p-4 rounded-md shadow-md">
    <div className="w-full h-48 bg-gray-300 mb-4 rounded-md"></div>
    <div className="h-6 bg-gray-300 mb-2 w-3/4"></div>
    <div className="h-6 bg-gray-300 mb-2 w-1/4"></div>
    <div className="h-10 bg-gray-300 w-1/2 rounded"></div>
  </div>
);

const ProductGrid = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(15);
  const navigate = useNavigate();
  const { addToCart } = useCartActions();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleViewProduct = (productId) => {
    navigate(`/shop/user/product/${productId}`);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 15, products.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 9 }, (_, index) => <ShimmerCard key={index} />)
        ) : products.length === 0 ? (
          <p className="text-center text-gray-600">No products available.</p>
        ) : (
          products.slice(0, visibleProducts).map((product) => (
            <div
              key={product._id}
              className="grid grid-rows-[auto_1fr_auto] border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform h-full cursor-pointer"
              onClick={() => handleViewProduct(product._id)}
            >
              <img
                src={product.image || "/path/to/default-image.jpg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between mt-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-700 mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Show More Button */}
      {!loading && visibleProducts < products.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreProducts}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
