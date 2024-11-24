import { useEffect } from "react";
import { useCart, useCartActions, useCartStoreState } from "./Store";
import LoadingOverlay from "./SlidingCart/LoadingOverlay";
import ErrorOverlay from "./SlidingCart/ErrorOverlay";
import CartTop from "./SlidingCart/CartTop";
import CartMain from "./SlidingCart/CartMain";
import CartCheckOut from "./SlidingCart/CartCheckOut";

function SlidingCart({ toggleShowCart, isVisible, closing }) {
  const cart = useCart();
  const { fetchCart, emptyCart } = useCartActions(); // Extract emptyCart
  const { isLoading, error } = useCartStoreState();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <ErrorOverlay message={error} />;
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end transform transition-transform duration-300 ease-in-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : closing
          ? "translate-x-full opacity-0"
          : "translate-x-full opacity-0"
      }`}
      onClick={toggleShowCart}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-xl p-6 relative transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <CartTop toggleShowCart={toggleShowCart} />
        <CartMain cart={cart} />
        <CartCheckOut
          cart={cart}
          emptyCart={emptyCart}
          toggleShowCart={toggleShowCart}
        />{" "}
        {/* Pass emptyCart */}
      </div>
    </div>
  );
}

export default SlidingCart;
