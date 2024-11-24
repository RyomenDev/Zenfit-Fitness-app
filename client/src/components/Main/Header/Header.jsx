import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Hooks/AuthContext";
import Navbar from "./Navbar";

const Header = () => {
  const { userRole, updateRole } = useAuth();

  // Fetch user role and token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    if (storedToken && role) {
      updateRole(role); // Update role in context
    } else {
      console.log("No token or role found in localStorage");
    }
  }, [updateRole]);

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200 p-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
      {/* Role Display */}
      <div className="text-gray-700 font-semibold text-lg hidden md:block">
        Role: {userRole || "Guest"}
      </div>

      {/* Logo */}
      <div className="logo-container flex-shrink-0">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
            alt="Website logo"
            className="w-12 md:w-16 transform transition-transform hover:scale-110"
          />
        </Link>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;

// {
// {/* Links based on user role */}
//   /* {renderRoleSpecificLinks()} */
// }
// // Utility function to render role-specific links
//   const renderRoleSpecificLinks = () => {
//     if (userRole === "Admin") {
//       return (
//         <div className="flex space-x-4">
//           <Link
//             to="/shop/admin/products/addProducts"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Add New Item
//           </Link>
//           <Link
//             to="/shop/admin/manage"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Manage Users
//           </Link>
//           <Link
//             to="/shop/admin/customer-activity"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Customer-Care
//           </Link>
//         </div>
//       );
//     } else if (userRole === "CustomerCare") {
//       return (
//         <div className="flex space-x-4">
//           <Link
//             to="/help-requests"
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             Help Requests
//           </Link>
//           <Link
//             to="/interact-customers"
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             Interact with Customers
//           </Link>
//         </div>
//       );
//     }
//     return null; // No extra buttons if not Admin or CustomerCare
//   };
