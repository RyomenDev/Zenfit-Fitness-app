import { Suspense, lazy } from "react";
const OrderSummary = lazy(() => import("./OrderSummary.jsx"));
import OrderSummaryShimmer from "./Shimmer/OrderSummaryShimmer";
// const UserInfo = lazy(() => import("./UserInfo.jsx"));
// import UserInfoShimmer from "./Shimmer/UserInfoShimmer";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Checkout
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mt-6">
        <Suspense fallback={<OrderSummaryShimmer />}>
          <OrderSummary />
        </Suspense>
      </div>
      {/* <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <Suspense fallback={<UserInfoShimmer />}>
          <UserInfo />
        </Suspense>
      </div> */}
    </div>
  );
};

export default CheckoutPage;

// import { Suspense, lazy } from "react";
// import OrderSummaryShimmer from "./Shimmer/OrderSummaryShimmer";
// import UserInfoShimmer from "./Shimmer/UserInfoShimmer";

// const OrderSummary = lazy(() => import("./OrderSummary.jsx"));
// const UserInfo = lazy(() => import("./UserInfo.jsx"));

// const CheckoutPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center py-6 bg-gray-100">
//       <Suspense fallback={<UserInfoShimmer />}>
//         <UserInfo />
//       </Suspense>
//       <Suspense fallback={<OrderSummaryShimmer />}>
//         <OrderSummary />
//       </Suspense>
//     </div>
//   );
// };

// export default CheckoutPage;
