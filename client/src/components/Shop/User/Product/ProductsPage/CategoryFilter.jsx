import { useState } from "react";

const CategoryFilter = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  // State to handle the visibility of the categories on small screens
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category, subcategory) => {
    const isSelected = selectedCategories.some(
      (item) => item.category === category && item.subcategory === subcategory
    );

    if (isSelected) {
      // Remove if already selected
      setSelectedCategories(
        selectedCategories.filter(
          (item) =>
            item.category !== category || item.subcategory !== subcategory
        )
      );
    } else {
      // Add the selected category/subcategory
      setSelectedCategories([...selectedCategories, { category, subcategory }]);
    }
  };

  const handleCategoryClear = () => {
    // Clear all selections
    setSelectedCategories([]);
  };

  // Toggle the categories list
  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="lg:col-span-1 p-4 bg-gray-100 rounded-md shadow-md sticky top-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        {/* Button to toggle the category list on small screens */}
        <button
          className="lg:hidden bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={toggleCategories}
        >
          {isOpen ? "Hide" : "Show"} Filters
        </button>
      </div>
      {/* Clear filters button */}
      <button
        onClick={handleCategoryClear}
        className="mb-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
      >
        Clear All Filters
      </button>

      {/* Collapsible list of categories */}
      <ul className={`space-y-4 ${isOpen ? "block" : "hidden lg:block"}`}>
        {Object.keys(categories).map((category) => (
          <li key={category}>
            <h3 className="font-bold text-lg mb-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <ul className="ml-4 space-y-1">
              {categories[category].map((subcategory) => (
                <li key={subcategory}>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500"
                      onChange={() =>
                        handleCategoryChange(category, subcategory)
                      }
                      checked={selectedCategories.some(
                        (item) =>
                          item.category === category &&
                          item.subcategory === subcategory
                      )}
                    />
                    <span className="ml-2 text-gray-700">{subcategory}</span>
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryFilter;
