
import { ShoppingCart, X } from "phosphor-react";

function CartTop({ toggleShowCart }) {
  return (
    <div className="flex items-center justify-between border-b pb-4 mb-4">
      <div className="flex items-center">
        <ShoppingCart size={24} className="text-blue-500" />
        <h2 className="ml-2 text-lg font-semibold">Your Cart</h2>
      </div>
      <button
        onClick={toggleShowCart}
        className="text-gray-500 hover:text-red-500"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default CartTop;
