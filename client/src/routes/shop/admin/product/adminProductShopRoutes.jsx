import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Lazy load shop components
const AdminProductPage = lazy(() =>
  import("../../../../components/Shop/Admin/Product/AdminProductPage.jsx")
);
const AdminProductListPage = lazy(() =>
  import(
    "../../../../components/Shop/Admin/AdminProductList/AdminProductListPage.jsx"
  )
);

function AdminShopProductsRoutes() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <Suspense fallback={<div>Loading Shop...</div>}>
        <Routes>
          <Route path="/" element={<AdminProductListPage />} />
          <Route path="/add" element={<AdminProductPage />} />
          <Route path="/:id" element={<AdminProductPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AdminShopProductsRoutes;
