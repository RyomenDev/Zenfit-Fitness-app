import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./../../../../../api/ShopApi";
import ProductImage from "./ProductCard/ProductImage";
import ProductDetails from "./ProductCard/ProductDetails";
import ProductDescription from "./ProductCard/ProductDescription";
import LoadingShimmer from "./ProductCard/LoadingShimmer";
import ErrorDisplay from "./ProductCard/ErrorDisplay";
import { useCart, useCartActions } from "../../Cart/Store";
import toast from "react-hot-toast";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cart = useCart(); // Zustand cart state
  const { addToCart, addProductQuantity, removeFromCart } = useCartActions(); // Zustand cart actions

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetchProductById(id);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Error fetching product. Please try again later.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Check if the product is already in the cart
  const productInCart = cart.find((item) => item._id === id);
  const productQty = productInCart ? productInCart.qty : 0;

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleIncrementQty = () => {
    addProductQuantity(product._id, productQty + 1);
    toast.success(`Increased quantity of ${product.name}`);
  };

  const handleDecrementQty = () => {
    if (productQty === 1) {
      removeFromCart(product._id);
      toast.error("Removed from cart");
    } else {
      addProductQuantity(product._id, productQty - 1);
      toast.error(`Decreased quantity of ${product.name}`);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <LoadingShimmer />
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage image={product.image} name={product.name} />
        <ProductDetails product={product}>
          {productQty === 0 ? (
            // Add to Cart Button
            <button
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex justify-center items-center mt-4">
              {/* Decrement Button */}
              <button
                className="w-24 bg-black text-white py-2 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
                onClick={handleDecrementQty}
              >
                -
              </button>
              {/* Quantity Display */}
              <span className="my-2 text-lg font-semibold text-black shadow-md px-4 py-1 rounded-md">
                {productQty}
              </span>
              {/* Increment Button */}
              <button
                className="w-24 bg-black text-white py-2 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
                onClick={handleIncrementQty}
              >
                +
              </button>
            </div>
          )}
        </ProductDetails>
      </div>
      <ProductDescription description={product.description} />
    </div>
  );
};

export default ProductPage;
