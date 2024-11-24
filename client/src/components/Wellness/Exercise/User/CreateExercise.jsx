/* eslint-disable react/prop-types */
import { useState } from "react";
import { addExercise as addExerciseApi } from "../../../../api/ExerciseApi"; // Import API call
import "../../../../styles/form.css";

const ExerciseCreateForm = (props) => {
  const { addExercise, userId } = props;

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [success, setSuccess] = useState(""); // State for success message
  const [error, setError] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !calories || !date || !duration) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(calories) || isNaN(duration)) {
      setError("Calories and Duration must be numbers.");
      return;
    }

    const exercise = {
      name,
      calories: Number(calories),
      date,
      duration: Number(duration),
    };

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("No user is logged in. The exercise will not be saved.");
        addExercise(exercise);
        resetForm();
        return;
      }

      // Use the API function to add exercise
      const addedExercise = await addExerciseApi(exercise, token, userId);

      // Inform user of success
      setSuccess("Exercise added successfully!");
      addExercise(addedExercise);
      resetForm();
    } catch (error) {
      console.error("Error adding exercise:", error);
      setError("Error adding exercise. Please try again.");
    }
  };

  const resetForm = () => {
    setName("");
    setCalories("");
    setDate("");
    setDuration("");
    setSuccess(""); // Clear success message
    setError(""); // Clear error message
  };

  return (
    <div className="exercise-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exercise-name">
            Exercise Name:
            <input
              id="exercise-name"
              type="text"
              value={name}
              placeholder="Enter Exercise Name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="calories-burned">
            Calories Burned:
            <input
              id="calories-burned"
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Date:
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="duration">
            Duration (in minutes):
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Add Exercise</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default ExerciseCreateForm;
