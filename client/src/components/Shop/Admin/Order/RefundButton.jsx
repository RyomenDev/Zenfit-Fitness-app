import { useEffect, useState } from "react";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/api/orders");
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const handleRefund = async (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to refund this order?"
    );
    if (confirmed) {
      await fetch(`/api/orders/${orderId}/refund`, { method: "POST" });
      alert("Order refunded successfully");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      {orders.map((order) => (
        <div key={order._id} className="border p-4 mb-4 rounded-lg shadow-md">
          <h4>Order ID: {order._id}</h4>
          <p>Status: {order.status}</p>
          <button
            onClick={() => handleRefund(order._id)}
            disabled={order.status !== "delivered"}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Issue Refund
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
