import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Dumbbell Set",
    price: "$99.99",
    image: "/path/to/dumbbell-set.jpg", // Ensure the correct path to the image
  },
  { id: 2, name: "Yoga Mat", price: "$29.99", image: "/path/to/yoga-mat.jpg" },
  {
    id: 3,
    name: "Treadmill",
    price: "$499.99",
    image: "/path/to/treadmill.jpg", // Ensure the correct path to the image
  },
  // Add more products as needed
];

function FeaturedProducts() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg border border-gray-200"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {product.name}
              </h3>
              <p className="text-lg text-blue-500 mb-4 font-bold">
                {product.price}
              </p>
              <Link
                to={`/shop/user/products/${product.id}`}
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring focus:ring-blue-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
