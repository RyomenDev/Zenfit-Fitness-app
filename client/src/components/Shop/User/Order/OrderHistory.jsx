import { useState, useEffect } from "react";
import { getUserOrders } from "../../../../api/OrderApi";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getUserOrders();
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
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

export default UserOrders;
