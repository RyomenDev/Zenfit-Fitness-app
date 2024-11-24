import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ProductRow = ({ product, handleDelete }) => {
  return (
    <tr className="hover:bg-gray-100 transition-colors duration-200">
      <td className="p-4">
        <div className="flex items-center">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-12 h-12 rounded-md object-cover mr-4"
          />
          <div>
            <p className="text-gray-800 font-medium">{product.name}</p>
            <p className="text-gray-500 text-sm">{product.shortDescription}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-gray-800 font-medium">
        ${product.price.toFixed(2)}
      </td>
      <td className="p-4">
        <div className="flex space-x-4">
          <Link
            to={`/shop/admin/products/${product._id}`}
            className="text-blue-600 hover:text-blue-800 transition duration-200 flex items-center"
          >
            <PencilSquareIcon className="w-5 h-5 mr-1" />
            Edit
          </Link>
          <button
            onClick={() => handleDelete(product._id, product.image)}
            className="text-red-600 hover:text-red-800 transition duration-200 flex items-center"
          >
            <TrashIcon className="w-5 h-5 mr-1" />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
