

const PriceFilter = ({ priceFilter, handlePriceFilter }) => {
  return (
    <div className="price-filter-wrapper mb-6">
      <label
        htmlFor="price-filter"
        className="block mb-2 font-semibold text-gray-700"
      >
        Sort by:
      </label>
      <select
        id="price-filter"
        value={priceFilter}
        onChange={handlePriceFilter}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        <option value="default" disabled hidden>
          Select an option
        </option>
        <option value="high-to-low">(Price) Highest to lowest</option>
        <option value="low-to-high">(Price) Lowest to highest</option>
      </select>
    </div>
  );
};

export default PriceFilter;
