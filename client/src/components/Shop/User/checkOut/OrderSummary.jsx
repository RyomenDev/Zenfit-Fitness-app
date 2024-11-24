/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "phosphor-react";
import { useCart, useCartActions, useCartStoreState } from "../Cart/Store";
import toast from "react-hot-toast";

function OrderSummary() {
  const navigate = useNavigate();
  const cart = useCart();
  const { addProductQuantity, removeFromCart, emptyCart } = useCartActions();
  const { isLoading, error } = useCartStoreState();

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg mt-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
      <h3 className="text-2xl font-semibold text-center border-b pb-4 mb-6">
        Order Summary
      </h3>
      {cart.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {cart.map((product) => (
              <CartProduct
                key={product._id || product.id}
                product={product}
                addProductQuantity={addProductQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total:</span>
              <span>${calculateTotalPrice(cart).toFixed(2)}</span>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => emptyCart()}
                className="bg-red-600 text-white text-center py-2 rounded-md hover:bg-red-700 transition mb-2 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Clear Cart
              </button>
              <button
                className="bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => {
                  toast.success("Proceeding to Checkout");
                  navigate("/shop/user/payment");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function CartProduct({ product, addProductQuantity, removeFromCart }) {
  const handleIncreaseQuantity = () => {
    addProductQuantity(product._id, product.qty + 1);
  };

  const handleDecreaseQuantity = () => {
    if (product.qty > 1) {
      addProductQuantity(product._id, product.qty - 1);
    }
  };

  const handleRemoveProduct = () => {
    removeFromCart(product._id);
    toast.error("Removed from Cart");
  };

  return (
    <div className="grid grid-cols-5 gap-4 items-center border-b pb-4 mb-4">
      <img
        src={product.image || "/placeholder-image.png"}
        alt={product.title}
        className="w-24 h-24 rounded-lg object-cover shadow-sm transition-transform duration-200 hover:scale-105"
      />
      <div className="col-span-2">
        <h4 className="text-lg font-medium">{product.name}</h4>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-2">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            -
          </button>
          <span className="mx-2 text-lg font-semibold">{product.qty}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-lg font-semibold">
          ${(product.price * product.qty).toFixed(2)}
        </span>
        <button
          onClick={handleRemoveProduct}
          className="text-red-500 mt-2 hover:text-red-600 transition"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

function EmptyCartMessage() {
  return (
    <div className="text-center text-lg font-semibold py-4">
      Your cart is empty.
    </div>
  );
}

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
      <span className="text-white text-lg animate-pulse">Loading...</span>
    </div>
  );
}

function calculateTotalPrice(cart) {
  return cart.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
}

export default OrderSummary;
