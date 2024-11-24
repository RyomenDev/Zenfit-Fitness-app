import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("../../pages/Auth/LoginPage.jsx"));
const SignupPage = lazy(() => import("../../pages/Auth/SignupPage.jsx"));
const LogoutPage = lazy(() => import("../../pages/Auth/LogoutPage.jsx"));

function Auth() {
  return (
    <Suspense fallback={<div>Loading Auth Section...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Suspense>
  );
}

export default Auth;
