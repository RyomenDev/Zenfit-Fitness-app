import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/AuthContext";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { updateRole } = useAuth(); // Access the context to clear role

  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      updateRole(null); // Clear role in context
      navigate("/auth/login"); // Redirect to login page
    };

    handleLogout();
  }, [navigate, updateRole]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      Logging out...
    </div>
  );
};

export default LogoutPage;
