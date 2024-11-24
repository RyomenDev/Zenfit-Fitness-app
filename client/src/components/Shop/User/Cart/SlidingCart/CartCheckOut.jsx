
import { Link } from "react-router-dom";

function CartCheckOut({ cart, emptyCart, toggleShowCart }) {
  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className="mt-6 border-t pt-4 grid gap-4">
      <h3 className="font-semibold text-lg">Total</h3>
      <p className="text-xl font-bold mb-4">${totalPrice.toFixed(2)}</p>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={emptyCart}
          aria-label="Clear cart"
          className="bg-red-500 text-white text-center py-2 rounded-md hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
        <Link
          to="/shop/user/checkout"
          onClick={toggleShowCart}
          aria-label="Go to checkout"
          className="bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition"
        >
          Go to Checkout
        </Link>
      </div>
    </div>
  );
}

function calculateTotalPrice(cart) {
  return cart.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
}

export default CartCheckOut;
