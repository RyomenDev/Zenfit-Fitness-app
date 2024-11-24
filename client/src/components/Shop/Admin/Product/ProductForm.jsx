import { useState } from "react";

const ProductForm = ({
  product,
  handleChange,
  handleImageChange,
  handleSubmit,
  editMode,
}) => {
  const [previewImage, setPreviewImage] = useState(product.image || null);

  // Categories and their respective subcategories
  const categories = {
    equipment: ["Cardio Machines", "Free Weights", "Gym Strength Equipment"],
    wearables: ["men", "women"],
    accessories: ["fitness-tracker", "yoga-mat", "Electronics", "Other"],
  };

  // Generate subcategories based on the selected category
  const subcategories = categories[product.category] || [];

  // Image preview handler
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    handleImageChange(e); // Call parent function to update product image state
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // Preview the chosen image in real-time
    } else {
      setPreviewImage(null); // Clear preview if no image is selected
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {editMode ? "Edit Product" : "Add New Product"}
      </h2>

      {/* Product Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter product name"
          required
        />
      </div>

      {/* Product Price */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Price:
        </label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter product price"
          required
        />
      </div>

      {/* Short Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Short Description:
        </label>
        <input
          type="text"
          name="shortDescription"
          value={product.shortDescription || ""}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="A brief description (max 100 characters)"
          maxLength="100"
          required
        />
      </div>

      {/* Full Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          rows="5"
          placeholder="Detailed product description"
          required
        ></textarea>
      </div>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Category:
        </label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory Selection */}
      {product.category && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Subcategory:
          </label>
          <select
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub.charAt(0).toUpperCase() + sub.slice(1)}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Image Upload & Preview */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Image:
        </label>
        <input
          type="file"
          onChange={handleImagePreview}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="mt-4 h-40 w-auto rounded-md shadow-lg"
          />
        )}
        {/* Show the existing image if editing */}
        {!previewImage && editMode && product.image && (
          <img
            src={product.image}
            alt="Current Product"
            className="mt-4 h-40 w-auto rounded-md shadow-lg"
          />
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {editMode ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
