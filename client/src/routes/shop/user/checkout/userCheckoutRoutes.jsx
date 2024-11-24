import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load shop components
const Checkout = lazy(() =>
  import("../../../../components/Shop/User/checkOut/index.jsx")
);
const ShippingDetails = lazy(() =>
  import("../../../../components/Shop/User/Payment/ShippingDetails.jsx")
);

function userCheckoutRoutes() {
  return (
    <Suspense fallback={<div>Loading Checkout...</div>}>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/shipping" element={<ShippingDetails />} />
      </Routes>
    </Suspense>
  );
}

export default userCheckoutRoutes;
