import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
