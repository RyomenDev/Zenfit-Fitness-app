import { useState, useEffect, useCallback } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ProductGrid from "./ProductGrid";
import { fetchProducts } from "../../../../../api/ShopApi"; // Imported from ShopApi.jsx

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState("default");

  const categories = {
    equipment: ["Cardio Machines", "Free Weights", "Gym Strength Equipment"],
    wearables: ["men", "women"],
    accessories: ["Fitness Tracker", "Yoga Mat", "Electronics", "Other"],
  };

  const fetchProductsFromApi = useCallback(async () => {
    try {
      const response = await fetchProducts(); // Using the fetchProducts from ShopApi.jsx
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductsFromApi();
  }, [fetchProductsFromApi]);

  const filterProducts = () => {
    return products
      .filter((product) => {
        return (
          selectedCategories.length === 0 ||
          selectedCategories.some(
            (item) =>
              item.category === product.category &&
              item.subcategory === product.subcategory
          )
        );
      })
      .sort((a, b) => {
        if (priceFilter === "high-to-low") return b.price - a.price;
        if (priceFilter === "low-to-high") return a.price - b.price;
        return 0; // No sorting
      });
  };

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="animate-pulse">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const filteredProducts = filterProducts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <PriceFilter
            priceFilter={priceFilter}
            handlePriceFilter={handlePriceFilter}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
