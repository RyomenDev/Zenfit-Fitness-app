import React, { Suspense, lazy, useState } from "react";

// Lazy load the HomePage component
const HomePage = lazy(() => import("./HomePage.jsx"));

// Custom hook to manage errors
const useErrorBoundary = () => {
  const [error, setError] = useState(null);

  const ErrorBoundary = ({ children }) => {
    if (error) {
      return (
        <div className="text-red-500 text-center">Something went wrong.</div>
      );
    }
    return React.Children.map(children, (child) =>
      React.cloneElement(child, { setError })
    );
  };

  return [ErrorBoundary, setError];
};

function ShopProductPage() {
  const [ErrorBoundary] = useErrorBoundary();

  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-lg">
            Loading Shop...
          </div>
        }
      >
        <HomePage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default ShopProductPage;
