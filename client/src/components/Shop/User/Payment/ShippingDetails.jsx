import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShippingDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    // Save shipping details to local storage or context
    const shippingDetails = {
      firstName,
      lastName,
      address,
      city,
      postalCode,
      country,
      phoneNumber,
    };
    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));
    navigate("/shop/user/payment");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Shipping Details
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          required
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
      <button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4"
      >
        Next
      </button>
    </div>
  );
}

export default ShippingDetails;
