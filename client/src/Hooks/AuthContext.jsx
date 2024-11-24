import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || "user"
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(!!token);
    setUserRole(role || "user");
  }, []);

  const login = (token, role, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", role);
    localStorage.setItem("user", user);

    setIsLoggedIn(true);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserRole("user");
  };

  const updateRole = useCallback((role) => {
    setUserRole(role);
    localStorage.setItem("userRole", role);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userRole, login, logout, updateRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

//

//

// import React, { createContext, useState, useCallback, useContext } from "react";

// // Create a Context for authentication
// const AuthContext = createContext();

// // Create a provider component
// export const AuthProvider = ({ children }) => {
//   const [userRole, setUserRole] = useState(
//     localStorage.getItem("userRole") || "user"
//   );

//   const updateRole = useCallback((role) => {
//     setUserRole(role);
//     localStorage.setItem("userRole", role);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ userRole, updateRole }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook for using auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
