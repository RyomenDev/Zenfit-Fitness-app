import { Routes, Route } from "react-router-dom";
import AdminUserOrders from "./AdminUserOrders";
import AdminUpdateOrder from "./AdminUpdateOrder";
import AdminDeleteOrder from "./AdminDeleteOrder";
import OrderDetails from "./OrderDetails";

// Main Order Component for Routing
const UserOrderRoutes = () => {
  return (
    <Routes>
      {/* Route to get all orders for a specific user (admin access) */}
      <Route path="/admin/user-orders/:userId" element={<AdminUserOrders />} />

      {/* Route to update a specific order (admin access) */}
      <Route
        path="/admin/update-order/:orderId"
        element={<AdminUpdateOrder />}
      />

      {/* Route to delete a specific order (admin access) */}
      <Route
        path="/admin/delete-order/:orderId"
        element={<AdminDeleteOrder />}
      />

      {/* Route for viewing the order details by users or admins */}
      <Route path="/order-details/:orderId" element={<OrderDetails />} />
    </Routes>
  );
};

export default UserOrderRoutes;
