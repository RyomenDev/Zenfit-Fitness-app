

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
      <span className="text-white">Loading...</span>
    </div>
  );
}

export default LoadingOverlay;
