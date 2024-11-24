import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="hidden md:flex space-x-4 text-lg font-semibold">
      <Link
        to="/shop/user"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Home
      </Link>
      <Link
        to="/shop/user/products"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Products
      </Link>
      <Link
        to="/shop/user/checkout"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Checkout
      </Link>
      <Link
        to="/shop/help"
        className="hover:text-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Help
      </Link>
    </nav>
  );
};

export default NavLinks;
