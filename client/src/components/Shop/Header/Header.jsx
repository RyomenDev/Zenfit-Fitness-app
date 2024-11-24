import { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/AuthContext";
import { useCart, useCartActions } from "../User/Cart/Store";
import DropdownMenu from "./DropdownMenu";
import SlidingCart from "../User/Cart/SlidingCart";
import CartIcon from "./CartIcon";
import NavLinks from "./NavLinks";
import RoleSpecificLinks from "./RoleSpecificLinks";
import HamburgerMenuIcon from "./HamburgerMenuIcon";

const Header = () => {
  const { userRole, updateRole } = useAuth();
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCart();
  const { fetchCart } = useCartActions();
  const [totalCartQty, setTotalCartQty] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    if (storedToken && role) {
      updateRole(role);
    } else {
      console.log("No token or role found in localStorage");
    }
  }, [updateRole]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    const totalQty = cart.reduce((total, current) => total + current.qty, 0);
    setTotalCartQty(totalQty);
  }, [cart]);

  const handleScroll = () => {
    const offset = window.scrollY;
    const headerHeight = 100;
    setIsSticky(offset > headerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`flex justify-between items-center p-4 bg-white shadow-md transition-all duration-200 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-xl"
            : "static"
        }`}
      >
        <div className="flex items-center space-x-6">
          {/* Role Specific Links */}
          <RoleSpecificLinks userRole={userRole} />

          {/* Navigation Links for larger screens */}
          <NavLinks />
        </div>

        {/* Right Section: Cart Icon and Hamburger Menu */}
        <div className="relative flex items-center">
          {/* Cart Icon */}
          <CartIcon
            totalCartQty={totalCartQty}
            toggleShowCart={toggleShowCart}
          />

          {/* Hamburger Menu Icon (small screens) */}
          <HamburgerMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>

      {/* Dropdown Menu for small screens */}
      <DropdownMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Sliding Cart */}
      {showCart && (
        <SlidingCart toggleShowCart={toggleShowCart} isVisible={showCart} />
      )}
    </>
  );
};

export default Header;
