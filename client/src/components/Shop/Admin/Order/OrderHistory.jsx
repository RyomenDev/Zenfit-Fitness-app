import { useState, useEffect } from "react";
import { getAllOrders } from "../../../../api/OrderApi";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response);
      } catch (error) {
        console.error("Error fetching all orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>All Orders</h2>
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

export default AdminOrders;
