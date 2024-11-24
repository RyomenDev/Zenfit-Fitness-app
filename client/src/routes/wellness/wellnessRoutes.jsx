import { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

// Lazy load the admin and user wellness routes
const Header = lazy(() =>
  import("../../../src/components/Wellness/Header/Header.jsx")
);
const ExerciseWellnessRoutes = lazy(() =>
  import("./Exercise/exerciseWellnessRoutes.jsx")
);
// const DietaryWellnessRoutes = lazy(() =>
//   import("./Dietary/dietaryWellnessRoutes.jsx")
// );

const Loading = () => <div>Loading...</div>;

const WellnessRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <RouterRoutes>
          <Route path="/exercise/*" element={<ExerciseWellnessRoutes />} />
          {/* <Route path="/dietary/*" element={<DietaryWellnessRoutes />} /> */}
        </RouterRoutes>
      </Suspense>
    </>
  );
};

export default WellnessRoutes;
