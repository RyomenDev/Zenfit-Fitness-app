import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const UserExerciseTrack = lazy(() =>
  import("../../../../pages/Wellness/User/Exercise/User/UserExerciseTrack.jsx")
);
const UserExerciseHome = lazy(() =>
  import("../../../../pages/Wellness/Home/Home.jsx")
);

const UserExerciseRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/track" element={<UserExerciseTrack />} />
        <Route path="/" element={<UserExerciseHome />} />
      </Routes>
    </Suspense>
  );
};

export default UserExerciseRoutes;
