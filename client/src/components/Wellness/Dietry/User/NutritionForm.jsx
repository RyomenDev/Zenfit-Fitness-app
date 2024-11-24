import { useState } from "react";
import { useNutrition } from "./NutritionContext";

const NutritionForm = () => {
  const { fetchNutritionData } = useNutrition();
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchNutritionData(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter food item (e.g., 1lb brisket and fries)"
      />
      <button type="submit">Get Nutrition Info</button>
    </form>
  );
};

export default NutritionForm;
