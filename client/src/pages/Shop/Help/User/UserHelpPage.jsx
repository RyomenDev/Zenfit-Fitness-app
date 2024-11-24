import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Suspense, lazy } from "react";
import { useEffect } from "react"; // Import useEffect for side effects
import { useAuth } from "../../../../Hooks/AuthContext";
// import HandleHelpRequestPage from "../Admin/HandleHelpRequestPage";
const Join = lazy(() =>
  import("../../../../components/Shop/Help/UserHelp/Join/Join.jsx")
);
const HandleHelpRequestPage = lazy(() =>
  import("../Admin/HandleHelpRequestPage")
);

const HelpPage = () => {
  const { userRole } = useAuth(); // Get user role from context
  const navigate = useNavigate(); // Initialize navigate hook for navigation

  // Redirect Customer role to the join chat page
  useEffect(() => {
    if (userRole === "Customer") {
      navigate("/shop/help/join");
    }
  }, [userRole, navigate]); // Dependency array to rerun the effect if userRole changes

  return (
    <>
      <div className="p-4 md:p-8">
        <h1 className="text-2xl font-semibold mb-4">Help Page</h1>
        {userRole === "User" && (
          <div className="space-y-4">
            <Join />
            {/* <Link
              to="/shop/help/join"
              className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
            >
              Join a Chat
            </Link> */}
          </div>
        )}
        {userRole === "CustomerCare" && (
          <div className="space-y-4">
            <HandleHelpRequestPage />
            {/* <Link
              to="/shop/help/help-requests"
              className="block bg-green-500 text-white text-center px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition-colors"
            >
              View Help Requests
            </Link> */}
            {/* <Link
              to="/shop/help/chat"
              className="block bg-yellow-500 text-white text-center px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition-colors"
            >
              Start Chat
            </Link> */}
          </div>
        )}
        {userRole !== "User" &&
          userRole !== "CustomerCare" &&
          userRole !== "Customer" && (
            <div className="text-gray-500">
              <p>
                Please log in as a User or CustomerCare to access the help
                features.
              </p>
            </div>
          )}
      </div>
    </>
  );
};

export default HelpPage;
