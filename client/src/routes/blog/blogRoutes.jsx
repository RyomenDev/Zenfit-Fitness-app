import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load blog routes for admin and user
const AdminBlogRoutes = lazy(() => import("./admin/adminBlogRoutes.jsx"));
const UserBlogRoutes = lazy(() => import("./user/userBlogRoutes.jsx"));

function ShopApp() {
  return (
    <Suspense fallback={<div>Loading Shop...</div>}>
      <Routes>
        <Route path="/admin/*" element={<AdminBlogRoutes />} />
        <Route path="/user/*" element={<UserBlogRoutes />} />
      </Routes>
    </Suspense>
  );
}

export default ShopApp;
