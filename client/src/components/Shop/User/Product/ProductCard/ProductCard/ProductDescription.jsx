

const ProductDescription = ({ description }) => (
  <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default ProductDescription;
