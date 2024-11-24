import { useState, useEffect } from "react";
import { getOrderDetails } from "../../../../api/OrderApi";

const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await getOrderDetails(orderId);
        setOrder(response);
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Order Details for {orderId}</h2>
      {order ? (
        <div>
          <p>Order Number: {order.orderNumber}</p>
          <p>Total Amount: {order.totalAmount}</p>
          <p>Status: {order.paymentStatus}</p>
          <p>Shipping Address: {order.shippingDetails.address}</p>
          <h3>Items:</h3>
          <ul>
            {order.cartItems.map((item) => (
              <li key={item.productId}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.qty}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No order details available</p>
      )}
    </div>
  );
};

export default OrderDetails;
