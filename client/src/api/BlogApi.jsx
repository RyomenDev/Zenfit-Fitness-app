import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_URL = `${BASE_URL}/api/blog`; // Update with your server URL

// Get all posts
// export const getPosts = async () => {
//   const response = await axios.get(`${API_URL}/post`);
//   return response.data;
// };

// Get a single post by ID
// export const getPostById = async (id) => {
//   const response = await axios.get(`${API_URL}/${id}`);
//   return response.data;
// };

// Create a new post
export const createPost = async (post) => {
  console.log("createPost", post);
  const response = await axios.post(`${API_URL}/post`, post);
  //   console.log("response", response);
  return response.data;
};

// Update a post
export const updatePost = async (id, updatedPost) => {
  const response = await axios.put(`${API_URL}/post/${id}`, updatedPost);
  return response.data;
};

// // Delete a post
// export const deletePost = async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
// };
