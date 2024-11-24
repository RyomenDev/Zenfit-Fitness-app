import ProductRow from "./ProductRow";

const ProductTable = ({ products, handleDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="border-b p-4 text-left text-sm font-semibold text-gray-600">
              Product
            </th>
            <th className="border-b p-4 text-left text-sm font-semibold text-gray-600">
              Price
            </th>
            <th className="border-b p-4 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
