import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load blog routes for admin and user
const UserHomeRoutes = lazy(() =>
  import("../../components/Main/UserHome/homeMain.jsx")
);

function ShopApp() {
  return (
    <Suspense fallback={<div>Loading Shop...</div>}>
      <Routes>
        <Route path="/*" element={<UserHomeRoutes />} />
      </Routes>
    </Suspense>
  );
}

export default ShopApp;
