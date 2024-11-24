import { useState } from "react";
import { deleteOrder } from "../../../../api/OrderApi";

const AdminDeleteOrder = ({ orderId }) => {
  const [message, setMessage] = useState("");

  const handleDeleteOrder = async () => {
    try {
      await deleteOrder(orderId);
      setMessage("Order deleted successfully!");
    } catch (error) {
      setMessage("Error deleting order");
    }
  };

  return (
    <div>
      <h2>Delete Order {orderId}</h2>
      {message && <p>{message}</p>}
      <button onClick={handleDeleteOrder}>Delete Order</button>
    </div>
  );
};

export default AdminDeleteOrder;
