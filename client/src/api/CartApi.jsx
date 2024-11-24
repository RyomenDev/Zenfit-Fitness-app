// CartApi.jsx
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_API_URL = `${BASE_URL}/api/shop/user/cart/`;

const getUserId = () => {
  const token = localStorage.getItem("token");
  let userId;
  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.id;
  }
  return userId;
};

const CartApi = {
  addToCart: async (addedProduct) => {
    const userId = getUserId();
    const response = await axios.post(`${USER_API_URL}/add`, {
      userId,
      productId: addedProduct._id,
      quantity: 1,
    });
    return response.data;
  },

  removeFromCart: async (productId) => {
    const userId = getUserId();
    const response = await axios.post(`${USER_API_URL}/remove`, {
      userId,
      productId,
    });
    return response.data;
  },

  addProductQuantity: async (id, newQty) => {
    const userId = getUserId();
    const response = await axios.post(`${USER_API_URL}/update`, {
      userId,
      productId: id,
      quantity: newQty,
    });
    return response.data;
  },

  emptyCart: async () => {
    const userId = getUserId();
    const response = await axios.post(`${USER_API_URL}/clear`, {
      userId,
    });
    return response.data;
  },

  fetchCart: async () => {
    // console.log("getting cart info");

    const userId = getUserId();
    const response = await axios.get(`${USER_API_URL}`, {
      params: { userId },
    });
    return response.data.cart;
  },
};

export default CartApi;
