import { Link } from "react-router-dom";

const DropdownMenu = ({ isMenuOpen, toggleMenu }) => {
  if (!isMenuOpen) return null; // Return nothing if menu is not open

  return (
    <div className="absolute right-0 mt-0 w-48 bg-white shadow-lg z-50 md:hidden rounded-lg">
      <nav className="flex flex-col space-y-2 p-4 text-lg font-semibold">
        <Link
          to="/wellness/exercise"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Home
        </Link>
        <Link
          to="/wellness/exercise"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Track
        </Link>
        <Link
          to="/wellness/exercise"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Dietary
        </Link>
      </nav>
    </div>
  );
};

export default DropdownMenu;
