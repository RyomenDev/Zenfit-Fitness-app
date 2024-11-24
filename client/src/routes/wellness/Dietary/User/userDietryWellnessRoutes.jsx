// import { lazy, Suspense } from "react";
// import { Route, Routes as RouterRoutes } from "react-router-dom";

// // Lazy load the admin exercise and help routes
// const AdminExerciseRoutes = lazy(() =>
//   import("./exercise/adminExerciseRoutes.jsx")
// );

// const Loading = () => <div>Loading...</div>;

// const adminWellnessRoutes = () => {
//   return (
//     <Suspense fallback={<Loading />}>
//       <RouterRoutes>
//         <Route path="/exercise/*" element={<AdminExerciseRoutes />} />
//       </RouterRoutes>
//     </Suspense>
//   );
// };

// export default adminWellnessRoutes;
