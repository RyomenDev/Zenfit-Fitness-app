
import { useNutrition } from "./NutritionContext";

const NutritionCard = () => {
  const { nutritionData } = useNutrition();

  return (
    <div className="nutrition-card">
      {nutritionData &&
        nutritionData.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.name}</h3>
            <table>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>{item.calories}</td>
                </tr>
                <tr>
                  <td>Serving Size</td>
                  <td>{item.serving_size_g} g</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>{item.fat_total_g} g</td>
                </tr>
                <tr>
                  <td>Saturated Fat</td>
                  <td>{item.fat_saturated_g} g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>{item.protein_g} g</td>
                </tr>
                <tr>
                  <td>Carbohydrates</td>
                  <td>{item.carbohydrates_total_g} g</td>
                </tr>
                <tr>
                  <td>Sugar</td>
                  <td>{item.sugar_g} g</td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>{item.fiber_g} g</td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>{item.sodium_mg} mg</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default NutritionCard;
