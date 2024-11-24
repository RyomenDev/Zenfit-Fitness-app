import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Lazy load shop components
const HomePage = lazy(() =>
  import("../../../../components/Shop/User/Home/UserShopHomePage.jsx")
);
const ProductsPage = lazy(() =>
  import(
    "../../../../components/Shop/User/Product/ProductsPage/UserProductsPage.jsx"
  )
);
const ProductCard = lazy(() =>
  import(
    "../../../../components/Shop/User/Product/ProductCard/UserProductCard.jsx"
  )
);

function UserProductsRoutes() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <Suspense fallback={<div>Loading Shop...</div>}>
        <Routes>
          {/* User */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductCard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default UserProductsRoutes;
