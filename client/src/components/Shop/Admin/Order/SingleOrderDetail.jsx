import { useState, useEffect } from "react";
import { getAdminUserOrders } from "../../../../api/OrderApi";

const AdminUserOrders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await getAdminUserOrders(userId);
        setOrders(response);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Orders for {userId}</h2>
      {orders.length === 0 ? (
        <p>No orders found for this user.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <h3>Order: {order.orderNumber}</h3>
              <p>Total: {order.totalAmount}</p>
              <p>Status: {order.paymentStatus}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminUserOrders;
