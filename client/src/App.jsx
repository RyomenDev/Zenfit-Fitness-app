import { Suspense } from "react";
import Header from "./components/Main/Header/Header";
import { AuthProvider } from "./Hooks/AuthContext.jsx";
import RoutesComponent from "./routes"; // Import the Routes component

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <AuthProvider>
        <div>
          <Header />
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                Loading...
              </div>
            }
          >
            <RoutesComponent />
          </Suspense>
        </div>
      </AuthProvider>
    </div>
  );
};

export default App;
