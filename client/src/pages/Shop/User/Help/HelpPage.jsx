import { Link } from "react-router-dom";
import { useAuth } from "../../../../Hooks/AuthContext";

const HelpPage = () => {
  const { userRole } = useAuth(); // Get user role from context

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-semibold mb-4">Help Page</h1>
      {userRole === "User" && (
        <div className="space-y-4">
          <Link
            to="/helpPage"
            className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
          >
            Join a Chat
          </Link>
        </div>
      )}
      {userRole === "CustomerCare" && (
        <div className="space-y-4">
          <Link
            to="/helpPage"
            className="block bg-green-500 text-white text-center px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition-colors"
          >
            View Help Requests
          </Link>
          <Link
            to="/chat"
            className="block bg-yellow-500 text-white text-center px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition-colors"
          >
            Start Chat
          </Link>
        </div>
      )}
      {userRole !== "User" && userRole !== "CustomerCare" && (
        <div className="text-gray-500">
          <p>
            Please log in as a User or CustomerCare to access the help features.
          </p>
        </div>
      )}
    </div>
  );
};

export default HelpPage;

// // import Chat from "../components/UserHelp/Chat/Chat.jsx";
// // import Join from "../components/UserHelp/Join/Join.jsx";
// import { Link, useNavigate } from "react-router-dom";

// const HelpPage = () => {
//   return (
//     <>
//       <div>HelpPage</div>
//       <Link to="/helpPage" className="hover:underline">
//         Join
//       </Link>
//       <Link to="/chat" className="hover:underline">
//         Chat
//       </Link>
//       {/* <Route path="/" element={<Join />} />
//         <Route path="/chat" element={<Chat />} /> */}
//     </>
//   );
// };

// export default HelpPage;
