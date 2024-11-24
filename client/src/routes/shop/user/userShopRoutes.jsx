import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load pages for better performance
const UserProductsRoutes = lazy(() =>
  import("./products/userProductsRoutes.jsx")
);
const UserCheckoutRoutes = lazy(() =>
  import("./checkout/userCheckoutRoutes.jsx")
);
const UserPaymentRoutes = lazy(() => import("./payment/userPaymentRoutes.jsx"));
const UserCartRoutes = lazy(() => import("./cart/userCartRoutes.jsx"));
// const UserOrderRoutes = lazy(() => import("./order/userOrderRoutes.jsx"));

const UserShopRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading Shop Content...</div>}>
        <Routes>
          {/* Shop Application */}
          <Route path="/*" element={<UserProductsRoutes />} />
          <Route path="/checkout/*" element={<UserCheckoutRoutes />} />
          <Route path="/payment/*" element={<UserPaymentRoutes />} />
          <Route path="/cart/*" element={<UserCartRoutes />} />
          {/* <Route path="/order/*" element={<UserOrderRoutes />} />*/}
        </Routes>
      </Suspense>
    </>
  );
};

export default UserShopRoutes;
