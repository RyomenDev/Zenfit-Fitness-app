import { useState } from "react";
import { updateOrder } from "../../../../api/OrderApi";

const AdminUpdateOrder = ({ orderId, existingOrderData }) => {
  const [orderData, setOrderData] = useState(existingOrderData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateOrder = async () => {
    setLoading(true);
    try {
      const response = await updateOrder(orderId, orderData);
      setMessage("Order updated successfully!");
    } catch (error) {
      setMessage("Error updating order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Order {orderId}</h2>
      {message && <p>{message}</p>}
      <div>
        <label>
          Payment Status:
          <input
            type="text"
            name="paymentStatus"
            value={orderData.paymentStatus}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Total Amount:
          <input
            type="number"
            name="totalAmount"
            value={orderData.totalAmount}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button onClick={handleUpdateOrder} disabled={loading}>
        {loading ? "Updating..." : "Update Order"}
      </button>
    </div>
  );
};

export default AdminUpdateOrder;
