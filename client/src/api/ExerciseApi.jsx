import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_API_URL = `${BASE_URL}/api/exercise/user`;

// Get exercises by userId
export const getExercises = async (userId, token) => {
  //   console.log("getExercises", userId, token);
  try {
    const response = await axios.get(`${USER_API_URL}/exercise`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises from backend:", error);
    throw new Error("Failed to fetch exercises.");
  }
};

// add exercises
export const addExercise = async (exercise, token, userId) => {
  try {
    const response = await axios.post(`${USER_API_URL}/exercise`, exercise, {
      headers: { Authorization: `Bearer ${token}` },
      params: { id: userId },
    });
    return response.data.exercise;
  } catch (error) {
    console.error("Error adding exercise:", error);
    throw new Error("Failed to add exercise.");
  }
};

// update exercises by exerciseId, userId
export const updateExercise = async (
  exerciseId,
  updatedExercise,
  token,
  userId
) => {
  try {
    const response = await axios.put(
      `${USER_API_URL}/exercise/${exerciseId}`,
      updatedExercise,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { loggedInUserId: userId },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating exercise:", error);
    throw new Error("Failed to update exercise.");
  }
};

// delete exercises by exerciseId
export const deleteExercise = async (exerciseId, token, userId) => {
  try {
    await axios.delete(`${USER_API_URL}/exercise/${exerciseId}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { loggedInUserId: userId },
    });
  } catch (error) {
    console.error("Error deleting exercise:", error);
    throw new Error("Failed to delete exercise.");
  }
};
