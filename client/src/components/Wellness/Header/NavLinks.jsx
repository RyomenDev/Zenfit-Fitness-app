import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="hidden md:flex space-x-4 text-lg font-semibold">
      <Link
        to="/wellness/exercise/user"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Home
      </Link>
      <Link
        to="/wellness/exercise/user/track"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Track
      </Link>
      <Link
        to="/wellness/exercise"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Dietary
      </Link>
    </nav>
  );
};

export default NavLinks;
