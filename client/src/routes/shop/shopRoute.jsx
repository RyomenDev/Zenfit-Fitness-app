import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../components/Shop/Header/Header";

// Lazy load for better performance
const AdminShopRoutes = lazy(() => import("./admin/adminShopRoutes.jsx"));
const UserShopRoutes = lazy(() => import("./user/userShopRoutes.jsx"));
const HelpShopRoutes = lazy(() => import("./help/helpShopRoutes.jsx"));

const ShopRoutes = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/*" element={<AdminShopRoutes />} />
          <Route path="/user/*" element={<UserShopRoutes />} />
          <Route path="/help/*" element={<HelpShopRoutes />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default ShopRoutes;
