
import { createContext, useContext, useState } from "react";
import axios from "axios";

const NutritionContext = createContext();

export const NutritionProvider = ({ children }) => {
  const [nutritionData, setNutritionData] = useState(null);
  const API_KEY = "/oduoJC8vv555ueQM5ADDQ==HFn41K7MoHvQ9ab3";
  // const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchNutritionData = (query) => {
    axios
      .get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })
      .then((response) => {
        setNutritionData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching nutrition data:", error);
      });
  };

  return (
    <NutritionContext.Provider value={{ nutritionData, fetchNutritionData }}>
      {children}
    </NutritionContext.Provider>
  );
};

export const useNutrition = () => {
  const context = useContext(NutritionContext);
  if (!context) {
    throw new Error("useNutrition must be used within a NutritionProvider");
  }
  return context;
};
