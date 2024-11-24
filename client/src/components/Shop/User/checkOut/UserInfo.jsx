import { useState } from "react";
import { useCartActions, useCart } from "../Cart/Store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg w-full md:w-3/4 lg:w-1/2 mx-auto space-y-6">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Contact Information
      </h3>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
}

function ShippingAddress() {
  const { emptyCart } = useCartActions();
  const cart = useCart();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const checkoutHandler = async () => {
    if (cart.length < 1) {
      toast.error("Your shopping cart is empty.");
      return;
    }

    const totalPrice = cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
    if (totalPrice < 1) {
      toast.error("Cannot process order with zero value.");
      return;
    }

    // Prepare order info with shipping details
    const orderInfo = {
      cartItems: cart.map((item) => ({
        productId: item._id,
        qty: item.qty,
        name: item.name,
        price: item.price,
        image: item.image,
      })),
      shippingDetails: {
        firstName,
        lastName,
        address,
        city,
      },
    };

    // Send order info to the server
    try {
      await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      });

      emptyCart();
      toast.success("Checked out successfully!");
      navigate("/shop/user/payment/success");
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="col-span-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <button
          className="col-span-2 bg-black text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 shadow-lg"
          onClick={checkoutHandler}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default UserInfo;

