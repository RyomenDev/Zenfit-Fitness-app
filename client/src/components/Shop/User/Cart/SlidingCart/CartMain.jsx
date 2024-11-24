
import CartProduct from "./CartProduct";
import EmptyCartMessage from "./EmptyCartMessage";
import { useCartActions } from "../Store"; 

function CartMain({ cart }) {
  const { addProductQuantity, removeFromCart } = useCartActions(); // Get actions from Zustand store

  if (!cart || cart.length === 0) {
    return <EmptyCartMessage />;
  }

  return (
    <div className="overflow-y-auto mb-4">
      {cart.map((product) => (
        <CartProduct
          key={product._id || product.id}
          product={product}
          addProductQuantity={addProductQuantity} 
          removeFromCart={removeFromCart} 
        />
      ))}
    </div>
  );
}

export default CartMain;
