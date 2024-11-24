import { create } from "zustand";
import CartApi from "../../../../api/CartApi"; // Import the CartApi

const useCartStore = create((set) => ({
  cart: [],
  isLoading: false,
  error: null,
  action: {
    addToCart: async (addedProduct) => {
      try {
        set({ isLoading: true });
        await CartApi.addToCart(addedProduct);
        set((state) => {
          const existingProduct = state.cart.find(
            (product) => product._id === addedProduct._id
          );
          const newCart = existingProduct
            ? state.cart.map((product) =>
                product._id === addedProduct._id
                  ? { ...product, qty: product.qty + 1 }
                  : product
              )
            : [...state.cart, { ...addedProduct, qty: 1 }];
          return { cart: newCart, isLoading: false };
        });
      } catch (error) {
        set({ isLoading: false, error: error.message });
      }
    },

    removeFromCart: async (productId) => {
      try {
        set({ isLoading: true });
        await CartApi.removeFromCart(productId);
        set((state) => ({
          cart: state.cart.filter((product) => product._id !== productId),
          isLoading: false,
        }));
      } catch (error) {
        set({ isLoading: false, error: error.message });
      }
    },

    addProductQuantity: async (id, newQty) => {
      try {
        set({ isLoading: true });
        await CartApi.addProductQuantity(id, newQty);
        set((state) => ({
          cart: state.cart.map((product) =>
            product._id === id
              ? { ...product, qty: Math.min(newQty, 20) }
              : product
          ),
          isLoading: false,
        }));
      } catch (error) {
        set({ isLoading: false, error: error.message });
      }
    },

    emptyCart: async () => {
      try {
        set({ isLoading: true });
        await CartApi.emptyCart();
        set({ cart: [], isLoading: false });
      } catch (error) {
        set({ isLoading: false, error: error.message });
      }
    },

    fetchCart: async () => {
      try {
        set({ isLoading: true });
        const cart = await CartApi.fetchCart();
        set({ cart, isLoading: false });
      } catch (error) {
        set({ isLoading: false, error: error.message });
      }
    },
  },
}));

// Hooks for accessing cart and actions
export const useCart = () => useCartStore((store) => store.cart);
export const useCartActions = () => useCartStore((store) => store.action);
export const useCartStoreState = () => ({
  isLoading: useCartStore((store) => store.isLoading),
  error: useCartStore((store) => store.error),
});
