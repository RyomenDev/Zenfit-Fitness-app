import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:5000";
const SignupForm = () => {
  //   console.log("Baseurl", BASE_URL);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userEmail: "",
    role: "User",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/auth/signup`, formData);
      console.log("res", res);
      if (res?.status === 201) navigate("/auth/login");

      alert("User registered successfully");
    } catch (error) {
      setError("Error registering user", error);
      // console.error(
      //   "Signup failed:",
      //   error.response?.data?.message || "Server error"
      // );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="userEmail"
            >
              Email:
            </label>
            <input
              id="userEmail"
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="role"
            >
              Role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="CustomerCare">Customer Care</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Signup
          </button>
        </form>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignupForm;
