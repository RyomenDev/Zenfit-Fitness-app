

const LoadingShimmer = () => (
  <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-300 h-96 w-full mb-4"></div>
    <div>
      <div className="h-8 bg-gray-300 w-3/4 mb-2"></div>
      <div className="h-6 bg-gray-300 w-1/4 mb-4"></div>
      <div className="h-4 bg-gray-300 w-full mb-4"></div>
      <div className="h-10 bg-gray-300 w-1/3"></div>
    </div>
  </div>
);

export default LoadingShimmer;
