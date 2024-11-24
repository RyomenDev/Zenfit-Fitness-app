import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../Hooks/AuthContext";

const BASE_URL = "http://localhost:5000";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const signupClickHandler = () => {
    navigate("/auth/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        username,
        password,
      });

      const { token, user } = response.data;
      console.log("response", response.data);

      login(token, user.role, user.username); // Use login from context

      if (user.role === "Admin") {
        navigate("/"); // Redirect based on role
      } else if (user.role === "User") {
        navigate("/wellness/user/exercise");
      } else if (user.role === "CustomerCare") {
        navigate("/");
      } else {
        setError("No userRole defined");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label
              className="block text-gray-700 font-medium"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-gray-700 font-medium"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
            <button
              onClick={signupClickHandler}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
