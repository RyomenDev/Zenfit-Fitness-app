/* eslint-disable react/display-name */
import React from "react";
import { X } from "phosphor-react";
import toast from "react-hot-toast";

const CartProduct = React.memo(
  ({ product, addProductQuantity, removeFromCart }) => {
    const handleIncrement = () => {
      addProductQuantity(product._id, product.qty + 1);
      toast.success(`Increased quantity of ${product.name}`);
    };

    const handleDecrement = () => {
      if (product.qty > 1) {
        addProductQuantity(product._id, product.qty - 1);
        toast.error(`Decreased quantity of ${product.name}`);
      }
    };

    const handleRemoveProduct = () => {
      removeFromCart(product._id);
      toast.error("Removed from Cart");
    };

    return (
      <div className="flex items-center justify-between mb-4 border-b pb-4">
        <img
          src={product.image}
          className="w-16 h-16 rounded-md object-cover"
          alt={product.name}
        />
        <div className="ml-4 flex-1">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">Category: {product.category}</p>
          <div className="flex items-center mt-2">
            <button
              onClick={handleDecrement}
              className="border w-8 text-center rounded-l bg-gray-200"
            >
              -
            </button>
            <span className="border-t border-b w-12 text-center">
              {product.qty}
            </span>
            <button
              onClick={handleIncrement}
              className="border w-8 text-center rounded-r bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-bold">
            ${(product.price * product.qty).toFixed(2)}
          </p>
          <button onClick={handleRemoveProduct} className="text-red-500 mt-2">
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }
);

export default CartProduct;
