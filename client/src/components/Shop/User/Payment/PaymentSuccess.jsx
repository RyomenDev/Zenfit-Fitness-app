import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useCart, useCartActions } from "../Cart/Store";
import { saveOrder } from "../../../../api/OrderApi";

const getUserId = () => {
  const token = localStorage.getItem("token");
  let userId;
  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.id;
  }
  return userId;
};

function PaymentSuccess() {
  const cart = useCart();
  const { emptyCart } = useCartActions();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const saveOrderData = async () => {
      if (cart.length === 0) {
        setIsLoading(false); // No need to save if the cart is empty
        return;
      }

      const shippingDetails = JSON.parse(
        localStorage.getItem("shippingDetails")
      );
      const userId = getUserId();

      const orderInfo = {
        cartItems: cart.map((item) => ({
          productId: item._id,
          qty: item.qty,
          name: item.name,
          price: item.price,
          image: item.image,
        })),
        shippingDetails,
        userId,
      };

      try {
        const response = await saveOrder(orderInfo);
        console.log("Order saved:", response);

        if (response.success) {
          await emptyCart();
          navigate("/shop/products"); // Navigate after successful save
        } else {
          console.error("Failed to save order:", response.message);
        }
      } catch (error) {
        console.error("Error saving order:", error);
      } finally {
        setIsLoading(false); // Mark loading as done
      }
    };

    saveOrderData();
  }, [cart, emptyCart, navigate]); // Removed hasSavedOrder to prevent unnecessary re-renders

  if (isLoading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h2 className="text-3xl font-semibold text-green-500 mb-4">
        Payment Successful!
      </h2>
      <p className="text-lg mb-4">
        Thank you for your purchase! Your order is being processed.
      </p>
      <Link
        to="/shop/user/products"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default PaymentSuccess;
