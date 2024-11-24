import { Suspense, lazy } from "react";

const ProductPage = lazy(() => import("./ProductCard.jsx"));

function SingleProductPage() {
  return (
    <>
      <div className="container mx-auto p-4">
        <Suspense fallback={renderLoadingFallback()}>
          <ProductPage />
        </Suspense>
      </div>
    </>
  );
}

const renderLoadingFallback = () => (
  <>
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <p className="mt-4 text-lg text-gray-700">Loading product details...</p>
      </div>
    </div>
  </>
);

export default SingleProductPage;
