import { ShoppingCart } from "phosphor-react";

const CartIcon = ({ totalCartQty, toggleShowCart }) => {
  return (
    <span onClick={toggleShowCart} className="relative cursor-pointer">
      <ShoppingCart
        size={28}
        className="text-gray-600 hover:text-blue-600 transition"
      />
      {totalCartQty > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
          {totalCartQty}
        </span>
      )}
    </span>
  );
};

export default CartIcon;
