const ProductDetails = ({ product, children }) => (
  <div className="flex flex-col justify-between">
    <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
      <p className="text-3xl font-semibold text-gray-600 mb-4">
        ${product.price}
      </p>
      <p className="text-lg text-gray-700 mb-6">{product.shortDescription}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <span className="text-lg font-semibold">Category:</span>
          <p className="text-md text-gray-600">{product.category}</p>
        </div>
        <div>
          <span className="text-lg font-semibold">Subcategory:</span>
          <p className="text-md text-gray-600">{product.subcategory}</p>
        </div>
      </div>
    </div>

    {/* Render the children prop which is the Add to Cart or Increment/Decrement UI */}
    <div>{children}</div>
  </div>
);

export default ProductDetails;


