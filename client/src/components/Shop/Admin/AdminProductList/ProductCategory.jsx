import ProductTable from "./ProductTable";

const ProductCategory = ({ category, subcategories, handleDelete }) => {
  return (
    <div key={category} className="mb-10">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-6 text-indigo-700">
        {category}
      </h2>
      {Object.entries(subcategories).map(([subcategory, products]) => (
        <div key={subcategory} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            {subcategory}
          </h3>
          <ProductTable products={products} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
