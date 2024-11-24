import "../../../../../styles/home.css";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

import ExerciseCreateForm from "../../../../../components/Wellness/Exercise/User/CreateExercise";
import ExerciseChart from "../../../../../components/Wellness/Exercise/User/ExerciseChart";
import ExerciseList from "../../../../../components/Wellness/Exercise/User/ExerciseList";
import { getExercises } from "../../../../../api/ExerciseApi"; // Import API function

// Dummy exercises for fallback
const dummyExercises = [
  {
    _id: "1",
    name: "Exercise 1",
    calories: 100,
    date: "2024-01-01",
    duration: 30,
  },
  {
    _id: "2",
    name: "Exercise 2",
    calories: 200,
    date: "2024-01-02",
    duration: 45,
  },
  {
    _id: "3",
    name: "Exercise 3",
    calories: 150,
    date: "2024-01-03",
    duration: 60,
  },
];

const UserExerciseHome = () => {
  const [exercises, setExercises] = useState([]);
  const [userId, setUserId] = useState(null);
  const location = useLocation();
  const message = location?.state?.message;

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const decodedToken = jwtDecode(token);
          setUserId(decodedToken.id);

          // Fetch exercises from the backend using the API function
          const exercises = await getExercises(decodedToken.id, token);
          setExercises(exercises);
        } else {
          setExercises(dummyExercises); // Use dummy data
        }
      } catch (error) {
        console.error("Error fetching exercises", error);
        setExercises(dummyExercises); // Set fallback data if needed
      }
    };

    fetchExercises();
  }, []);

  const addExercise = (newExercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };

  return (
    <div>
      <ExerciseCreateForm addExercise={addExercise} userId={userId} />
      <div className="exercise-chart">
        <ExerciseChart exerciseData={exercises} />
      </div>
      <ExerciseList
        exercises={exercises}
        setExercises={setExercises}
        userId={userId}
      />
    </div>
  );
};

export default UserExerciseHome;
