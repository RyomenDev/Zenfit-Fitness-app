import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load all components
const PaymentPage = lazy(() =>
  import("../../../../components/Shop/User/Payment/PaymentMain.jsx")
);
const PaymentSuccess = lazy(() =>
  import("../../../../components/Shop/User/Payment/PaymentSuccess.jsx")
);
const PaymentCancel = lazy(() =>
  import("../../../../components/Shop/User/Payment/PaymentCancel.jsx")
);

const PaymentRoute = () => {
  return (
    <Suspense fallback={<div>Loading Payment Page...</div>}>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
      </Routes>
    </Suspense>
  );
};

export default PaymentRoute;
