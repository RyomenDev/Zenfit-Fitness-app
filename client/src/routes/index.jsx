import { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

// Lazy load pages for better performance
// const HomeRoutes = lazy(() =>
//   import("../components/Main/UserHome/homeMain.jsx")
// );
const HomeRoutes = lazy(() => import("../pages/Home/UserHomePage.jsx"));
// const HomeRoutes = lazy(() => import("./home/homeRoutes.jsx"));
const AuthRoutes = lazy(() => import("./auth/authRoutes.jsx"));
const BlogRoutes = lazy(() => import("./blog/blogRoutes.jsx"));
const ShopRoute = lazy(() => import("./shop/shopRoute.jsx"));
const WellnessRoutes = lazy(() => import("./wellness/wellnessRoutes.jsx"));

// const HomePage = lazy(() => import("../pages/Home"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

const RoutesComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterRoutes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/blog/*" element={<BlogRoutes />} />
        <Route path="/shop/*" element={<ShopRoute />} />
        <Route path="/wellness/*" element={<WellnessRoutes />} />

        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </RouterRoutes>
    </Suspense>
  );
};

export default RoutesComponent;
