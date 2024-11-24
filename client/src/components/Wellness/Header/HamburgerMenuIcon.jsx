import { List, X } from "phosphor-react";

const HamburgerMenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="ml-4 md:hidden focus:outline-none text-gray-600 hover:text-blue-600 transition"
    >
      {isMenuOpen ? (
        <X size={28} className="text-gray-600 hover:text-blue-600 transition" />
      ) : (
        <List
          size={28}
          className="text-gray-600 hover:text-blue-600 transition"
        />
      )}
    </button>
  );
};

export default HamburgerMenuIcon;
