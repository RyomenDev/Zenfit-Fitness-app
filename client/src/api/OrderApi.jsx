const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_URL = `${BASE_URL}/api/shop/`;
const USER_API_URL = `${API_URL}/user/order/`;

// 1. Save order (for users)
export const saveOrder = async (orderData) => {
  console.log("orderData--", orderData);

  try {
    const response = await fetch(`${USER_API_URL}/save-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems: orderData.cartItems,
        shippingDetails: orderData.shippingDetails,
        userId: orderData.userId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save order");
    }

    return await response.json();
  } catch (error) {
    console.error("Error saving order:", error);
    throw error;
  }
};

// // 2. Get user orders (for authenticated users)
// export const getUserOrders = async () => {
//   const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
//   try {
//     const response = await fetch(`${API_URL}/user/orders`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Authorization token for authenticated user
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch user orders");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     throw error;
//   }
// };

// // 3. Get all orders (Admin-only functionality)
// export const getAllOrders = async () => {
//   const token = localStorage.getItem("token"); // Assuming admin token is stored in localStorage
//   try {
//     const response = await fetch(`${API_URL}/admin/orders`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Authorization token for admin
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch all orders");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching all orders:", error);
//     throw error;
//   }
// };

// // 4. Get admin orders for a specific user (Admin-only functionality)
// export const getAdminUserOrders = async (userId) => {
//   const token = localStorage.getItem("token"); // Admin token
//   try {
//     const response = await fetch(`${API_URL}/admin/orders/${userId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Authorization token for admin
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch admin user orders");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching admin user orders:", error);
//     throw error;
//   }
// };

// // 5. Update an order (Admin-only functionality)
// export const updateOrder = async (orderId, updatedOrderData) => {
//   const token = localStorage.getItem("token"); // Admin token
//   try {
//     const response = await fetch(`${API_URL}/admin/order/${orderId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Authorization token for admin
//       },
//       body: JSON.stringify(updatedOrderData), // Sending updated order data
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update the order");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error updating order:", error);
//     throw error;
//   }
// };

// // 6. Delete an order (Admin-only functionality)
// export const deleteOrder = async (orderId) => {
//   const token = localStorage.getItem("token"); // Admin token
//   try {
//     const response = await fetch(`${API_URL}/admin/order/${orderId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Authorization token for admin
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to delete the order");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error deleting order:", error);
//     throw error;
//   }
// };

// // 7. Get specific order details (for both admin and user)
// export const getOrderDetails = async (orderId) => {
//   const token = localStorage.getItem("token"); // User or Admin token
//   try {
//     const response = await fetch(`${API_URL}/order/${orderId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Authorization token for user/admin
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch order details");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching order details:", error);
//     throw error;
//   }
// };
