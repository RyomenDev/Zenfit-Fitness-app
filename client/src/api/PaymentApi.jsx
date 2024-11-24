/* eslint-disable no-useless-catch */
// PaymentApi.jsx
const BASE_URL = import.meta.env.VITE_BASE_URL;
const USER_API_URL = `${BASE_URL}/api/shop/user/payment/create-payment-intent`;

export const createCheckoutSession = async (orderInfo) => {
  const response = await fetch(`${USER_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderInfo }),
  });

  if (!response.ok) {
    throw new Error("Failed to create checkout session");
  }

  return response;
};
