import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Lazy load shop components
const AdminProductShopRoutes = lazy(() =>
  import("./product/adminProductShopRoutes.jsx")
);
// const AdminOrderShopRoutes = lazy(() =>
//   import("./order/adminOrderShopRoutes.jsx")
// );

function AdminShopRoutes() {
  return (
    <>
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<div>Loading Shop...</div>}>
        <Routes>
          <Route path="/products/*" element={<AdminProductShopRoutes />} />
          {/* <Route path="/order" element={<AdminOrderShopRoutes />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default AdminShopRoutes;
