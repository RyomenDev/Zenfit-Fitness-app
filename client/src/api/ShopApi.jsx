import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_API_URL = `${BASE_URL}/api/shop/user/products`;
const ADMIN_API_URL = `${BASE_URL}/api/shop/admin/products`;

// Fetch all products
export const fetchProducts = () => {
  //   console.log("fetchingAll-api");
  return axios.get(`${USER_API_URL}/`);
};

// Fetch a single product by ID
export const fetchProductById = (productId) => {
  //   console.log("fetchingById-api");
  return axios.get(`${USER_API_URL}/${productId}`);
};

// Add a new product with image upload
export const addProduct = (product, imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  //   console.log("adding-api", formData);
  return axios.post(`${ADMIN_API_URL}/upload`, formData, {
    params: product,
  });
};

// Update an existing product with image upload
export const updateProduct = (product, imageFile, productId) => {
  //   console.log("updating-api");
  const formData = new FormData();
  if (imageFile) {
    formData.append("file", imageFile);
  }
  return axios.put(`${ADMIN_API_URL}/upload/${productId}`, formData, {
    params: product,
  });
};

// Delete a product by ID and its image ID
export const deleteProduct = (productId, imgId) => {
  //   console.log("deleting-api");
  return axios.delete(`${ADMIN_API_URL}/${productId}`, {
    params: { img_id: imgId },
  });
};
