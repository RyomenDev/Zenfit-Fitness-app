import { useState, useEffect } from "react";

export const Navigation = (props) => {
  const { data } = props;
  //   console.log("Navigation", data);

  const navigationData = data || {};

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    const headerHeight = 100; // Adjust based on your header height
    if (offset > headerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <nav
        className={`w-full bg-white shadow-md z-50 transition-all duration-200 ease-in-out ${
          isSticky ? "fixed top-0 left-0" : "static"
        }`}
        style={{
          top: isSticky ? "0px" : "-100px", // Smooth transition from off-screen to top
          transition: "top 0.2s ease-in-out, background-color 0.2s ease-in-out",
        }}
      > */}
      <nav
        className={`w-full bg-white shadow-md z-50  ${
          isSticky ? "fixed top-0 left-0" : "static"
        }`}
        style={{
          top: isSticky ? "0px" : "-100px", // Smooth transition from off-screen to top
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand Name */}
          <a className="text-2xl font-bold text-gray-800" href="#page-top">
            {navigationData.brandName || "Brand Name"}
          </a>

          {/* Hamburger Icon for mobile view */}
          <button
            className="text-gray-800 md:hidden block focus:outline-none"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <div
            className={`${
              isCollapsed ? "hidden" : "block"
            } md:block w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              {navigationData.menuItems &&
                navigationData.menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-indigo-600 transition duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
