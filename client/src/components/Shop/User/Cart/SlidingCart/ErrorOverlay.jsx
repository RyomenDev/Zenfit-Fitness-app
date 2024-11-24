

function ErrorOverlay({ message }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center text-white">
      <span>{message}</span>
    </div>
  );
}

export default ErrorOverlay;
