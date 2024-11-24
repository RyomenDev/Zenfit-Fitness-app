import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Lazy load shop components
const HomePage = lazy(() =>
  import("../../../../components/Shop/User/Home/HomeMain.jsx")
);

function UserCartRoutes() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <Suspense fallback={<div>Loading Shop...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default UserCartRoutes;
