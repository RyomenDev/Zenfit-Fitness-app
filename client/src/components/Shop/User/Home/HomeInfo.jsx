import React from "react";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="flex flex-col items-center text-center p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-300 hover:to-gray-400">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 transition-transform duration-500 text-gray-800 hover:text-blue-600 hover:scale-105">
          Elevate Your Fitness Journey with Zenfit
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-6 transition-colors duration-500 hover:text-gray-600">
          Discover top-quality gym equipment, stylish activewear for men and
          women, and essential accessories to enhance your workout experience.
          Whether you're a seasoned athlete or just starting, Zenfit has
          everything you need to achieve your fitness goals.
        </p>
      </div>
      <Link to="shop/user/products">
        <button className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105 hover:shadow-lg">
          Explore Our Collection
        </button>
      </Link>
    </article>
  );
}

export default HomeInfo;
