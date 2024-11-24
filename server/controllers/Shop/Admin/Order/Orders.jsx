import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/api/orders"); // Fetch orders from your server
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <h4>Order ID: {order._id}</h4>
          <p>Total: ${order.total}</p>
          <p>Status: {order.status}</p>
          {/* More order details here */}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
