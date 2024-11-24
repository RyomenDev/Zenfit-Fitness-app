import NutritionForm from "./NutritionForm";
import NutritionCard from "./NutritionCard";
import { useNutrition } from "./NutritionContext";

const GetNutritionInfo = () => {
  const { nutritionData } = useNutrition();

  return (
    <div className="GetNutritionInfo">
      <h1>Nutrition Information</h1>
      <NutritionForm />
      {nutritionData && <NutritionCard />}
    </div>
  );
};

export default GetNutritionInfo;
