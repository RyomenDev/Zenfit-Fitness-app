import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/AuthContext";
import { useState } from "react";
import { List, X } from "phosphor-react";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Handlers for login and logout
  const loginHandler = () => {
    navigate("/auth/login");
  };

  const logoutHandler = () => {
    logout();
    navigate("/auth/login"); // Redirect to login page after logout
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center space-x-6">
      {/* Hamburger Menu for Small Screens */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <X size={28} className="text-gray-700" />
        ) : (
          <List size={28} className="text-gray-700" />
        )}
      </button>

      {/* Navigation Links for Medium and Large Screens */}
      <nav className="hidden md:flex space-x-4 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Home
        </Link>
        <Link
          to="/Blog/user"
          className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Blogs
        </Link>
        <Link
          to="/wellness/exercise/user"
          className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Wellness
        </Link>
        <Link
          to="/shop/user"
          className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Shop
        </Link>
      </nav>

      {/* Login/Logout Button (shown on all screens) */}
      <div>
        {isLoggedIn ? (
          <button
            onClick={logoutHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            aria-label="Logout"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={loginHandler}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            aria-label="Login"
          >
            Login
          </button>
        )}
      </div>

      {/* Dropdown Menu for Small Screens (Mobile) */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md w-48 py-4 md:hidden">
          <nav className="flex flex-col space-y-2 text-lg font-medium px-4">
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/Blog/user"
              className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              to="/wellness/user/exercise"
              className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Wellness
            </Link>
            <Link
              to="/shop/user"
              className="hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Shop
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// {
//   /* <Link
//           to="/about"
//           className="hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
//         >
//           About
//         </Link> */
// }
// {
//   /* <Link
//           to="/contact"
//           className="hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
//         >
//           Contact
//         </Link> */
// }
// {
//   /* <Link
//           to="/services"
//           className="hover:text-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
//         >
//           Services
//         </Link> */
// }
