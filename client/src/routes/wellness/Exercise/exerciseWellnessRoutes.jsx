import { lazy, Suspense } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

// Lazy load the admin exercise and help routes
const UserExerciseWellnessRoutes = lazy(() =>
  import("./User/userExerxiseWellnessRoutes.jsx")
);
// const AdminExerciseWellnessRoutes = lazy(() =>
//   import("./Admin/adminExerxiseWellnessRoutes.jsx")
// );

const Loading = () => <div>Loading...</div>;

const ExerciseWellnessRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
        <Route path="/user/*" element={<UserExerciseWellnessRoutes />} />
        {/* <Route path="/admin/*" element={<AdminExerciseWellnessRoutes />} /> */}
      </RouterRoutes>
    </Suspense>
  );
};

export default ExerciseWellnessRoutes;
