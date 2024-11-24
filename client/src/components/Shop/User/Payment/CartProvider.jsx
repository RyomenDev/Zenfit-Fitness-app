// CartProvider.jsx
import { createContext, useContext, useEffect } from "react";
import { useCart, useCartActions, useCartStoreState } from "../Cart/Store";

// Create Cart Context
const CartContext = createContext();
const CartActionsContext = createContext();

// Custom hooks to use CartContext
export const useCartContext = () => useContext(CartContext);
export const useCartActionsContext = () => useContext(CartActionsContext);

// CartProvider component
export const CartProvider = ({ children }) => {
  const cart = useCart(); // Access the cart state from the store
  const { fetchCart } = useCartActions(); // Fetch the cart when the component mounts
  const { isLoading, error } = useCartStoreState(); // Handle loading and error states

  // On mount, fetch the cart data
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <CartContext.Provider value={{ cart, isLoading, error }}>
      <CartActionsContext.Provider value={useCartActions()}>
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  );
};
