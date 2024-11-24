import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../Hooks/AuthContext";
import customerHelpIcon from "../../../../../assets/icons/customerHelpIcon.svg";

// Importing icons from react-icons
import { FaHeadset, FaCommentDots, FaUsers } from "react-icons/fa";
import {
  MdOutlineSupportAgent,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";

const ENDPOINT = "http://localhost:5000";
let socket;

const HelpRequests = ({ yourName }) => {
  const [activeChats, setActiveChats] = useState([]);
  const navigate = useNavigate();
  const { userRole } = useAuth(); // Get user role from AuthContext

  useEffect(() => {
    if (userRole !== "CustomerCare") {
      console.log(
        "Access denied. Only CustomerCare agents can access this page."
      );
      return;
    }

    if (!socket) {
      socket = io(ENDPOINT);
    }

    // Request active chats from the server
    socket.emit("requestActiveChats");

    // Listen for active chats
    socket.on("activeChats", ({ activeChats }) => {
      setActiveChats(activeChats);
    });

    // Clean up on component unmount
    return () => {
      socket.off("activeChats");
    };
  }, [userRole]);

  const joinChat = (chatRoom) => {
    const name = yourName;
    navigate(`/shop/help/chat?name=${name}&room=${chatRoom}`);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-3/5 lg:w-2/5">
        {/* Header Section */}
        <div className="flex items-center justify-center">
          <FaHeadset className="text-blue-500 text-3xl mr-2" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Live Support - {userRole === "CustomerCare" ? "Agent View" : ""}
          </h2>
        </div>

        {/* Guidelines for CustomerCare agents */}
        {userRole === "CustomerCare" && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center">
              <MdOutlineSupportAgent className="text-blue-500 mr-2" />
              Guidelines for Customer Care:
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                <FaCommentDots className="inline-block mr-2" />
                Respond to chats quickly and professionally.
              </li>
              <li>
                <FaUsers className="inline-block mr-2" />
                Address the user's queries clearly and politely.
              </li>
              <li>Escalate any issues that require admin attention.</li>
            </ul>
          </div>
        )}

        {/* Active Chats List */}
        <div className="space-y-4">
          {activeChats.length > 0 ? (
            activeChats.map((chatRoom, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow hover:bg-gray-200 transition-all duration-200"
              >
                <div className="flex items-center">
                  <MdOutlineChatBubbleOutline className="text-blue-500 mr-2" />
                  <span className="text-lg text-gray-800">{chatRoom}</span>
                </div>
                <button
                  className="bg-blue-500 text-white uppercase py-2 px-6 rounded-lg hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-200"
                  onClick={() => joinChat(chatRoom)}
                >
                  Join Chat
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-500">
              No active chats available
            </p>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center">
          <img
            src={customerHelpIcon} // Use the imported SVG
            alt="Support Icon"
            className="w-24 h-24 object-cover opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpRequests;

// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// const ENDPOINT = "http://localhost:5000";
// let socket;

// const HelpRequests = ({ yourName }) => {
//   const [activeChats, setActiveChats] = useState([]);
//   const navigate = useNavigate(); // Initialize navigate hook for navigation

//   useEffect(() => {
//     if (!socket) {
//       socket = io(ENDPOINT);
//     }

//     // Request active chats from the server
//     socket.emit("requestActiveChats");

//     // Listen for active chats event from the server
//     socket.on("activeChats", ({ activeChats }) => {
//       console.log("Active Chats Received:", activeChats);
//       setActiveChats(activeChats);
//     });

//     // Clean up the listener when the component is unmounted
//     return () => {
//       console.log("Removing activeChats listener");
//       socket.off("activeChats");
//     };
//   }, []);

//   const joinChat = (chatRoom) => {
//     // Join the selected chat room and navigate to the Chat component
//     console.log(`Hello ${chatRoom}`);
//     const name = yourName;
//     // Navigate to the Chat component with query params for name and room
//     navigate(`/shop/help/chat?name=${name}&room=${chatRoom}`);
//   };

//   return (
//     <div>
//       <h2>Active Chats</h2>
//       <ul>
//         {activeChats.length > 0 ? (
//           activeChats.map((chatRoom, index) => (
//             <li key={index}>
//               {chatRoom}{" "}
//               <button
//                 className="bg-blue-500 text-white uppercase py-3 px-4 rounded-lg  mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
//                 onClick={() => joinChat(chatRoom)}
//               >
//                 Join Chat
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No active chats available</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default HelpRequests;
