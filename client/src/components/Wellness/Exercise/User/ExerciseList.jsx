import { useState } from "react";
import Cards from "./Cards";
import {
  updateExercise as updateExerciseApi,
  deleteExercise as deleteExerciseApi,
} from "../../../../api/ExerciseApi"; // Import API calls

const ExerciseList = ({ exercises, setExercises, userId }) => {
  const [currentEditId, setCurrentEditId] = useState(null);
  const [updatedExercise, setUpdatedExercise] = useState({
    name: "",
    calories: 0,
    date: "",
    duration: 0,
  });
  const [error, setError] = useState(null);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (token) {
        // User is logged in, perform authenticated update
        const updatedData = await updateExerciseApi(
          currentEditId,
          updatedExercise,
          token,
          userId
        );

        // Update the state directly with the updated exercise
        setExercises((prevExercises) =>
          prevExercises.map((exercise) =>
            exercise._id === currentEditId ? updatedData : exercise
          )
        );
      } else {
        // No token found, editing dummy exercise locally
        setExercises((prevExercises) =>
          prevExercises.map((exercise) =>
            exercise._id === currentEditId ? updatedExercise : exercise
          )
        );
      }

      setCurrentEditId(null); // Clear current edit ID
    } catch (error) {
      console.error("Error updating exercise:", error);
      setError("Failed to update exercise. Please try again.");
    }
  };

  const handleEditClick = (id, exercise) => {
    setCurrentEditId(id);
    setUpdatedExercise({ ...exercise });
  };

  const handleCancelEdit = () => {
    setCurrentEditId(null);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        // User is logged in, perform authenticated delete
        await deleteExerciseApi(id, token, userId);

        // Update the state directly with the removed exercise
        setExercises((prevExercises) =>
          prevExercises.filter((exercise) => exercise._id !== id)
        );
      } else {
        alert("No changes will be made if user is not logged in");
        setExercises((prevExercises) =>
          prevExercises.filter((exercise) => exercise._id !== id)
        );
      }

      setCurrentEditId(null); // Clear current edit ID
    } catch (error) {
      console.error("Error deleting exercise:", error);
      setError("Failed to delete exercise. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Exercise List</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="card-grid">
        {exercises.map((exercise) => (
          <Cards
            key={exercise._id}
            exercise={exercise}
            currentEditId={currentEditId}
            onEditClick={handleEditClick}
            onDelete={handleDelete}
            updatedExercise={updatedExercise}
            setUpdatedExercise={setUpdatedExercise}
            handleEditSubmit={handleEditSubmit}
            handleCancelEdit={handleCancelEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
