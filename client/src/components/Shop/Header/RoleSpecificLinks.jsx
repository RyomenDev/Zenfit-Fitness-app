import { Link } from "react-router-dom";

const RoleSpecificLinks = ({ userRole }) => {
  if (userRole === "Admin") {
    return (
      <div className="flex space-x-4">
        <Link
          to="/shop/admin/products/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add New Item
        </Link>
        <Link
          to="/shop/admin/products"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Admin Products
        </Link>
      </div>
    );
  }
  return null;
};

export default RoleSpecificLinks;
