import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useAuth } from "../../../../../Hooks/AuthContext";

export default function Join() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const { userRole, updateRole } = useAuth();
  const navigate = useNavigate(); // Initialize navigate hook for navigation

  // Function to generate a random room ID
  const generateRoomId = () => {
    return Math.random().toString(36).substr(2, 9); // Generates a random 9-character string
  };

  useEffect(() => {
    const newRoomId = generateRoomId(); // Generate a new room ID when the component mounts
    setRoomId(newRoomId);
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const userName = localStorage.getItem("user");
    const role = localStorage.getItem("userRole");

    if (storedToken && userName && role) {
      updateRole(role);
      setName(userName);
    } else {
      console.log("No token or role found in localStorage");
    }

    // Redirect Customer role directly to chat page
    if (role === "Customer") {
      navigate(`/shop/help/chat?name=${userName}&room=${newRoomId}`);
    }
  }, [updateRole, navigate]); // Added navigate to dependency array

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-11/12 md:w-2/5 lg:w-1/4 bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-800 pb-4">
          Join
        </h1>
        <Link
          onClick={(e) => (!name || !roomId ? e.preventDefault() : null)}
          to={`/shop/help/chat?name=${name}&room=${roomId}`}
        >
          <button
            className="bg-blue-500 text-white uppercase py-3 px-4 rounded-lg w-full mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            type="submit"
          >
            Join Chat now
          </button>
        </Link>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../../../../Hooks/AuthContext";

// export default function Join() {
//   const [name, setName] = useState("");
//   const [roomId, setRoomId] = useState("");
//   const { userRole, updateRole } = useAuth();

//   // Function to generate a random room ID
//   const generateRoomId = () => {
//     return Math.random().toString(36).substr(2, 9); // Generates a random 9-character string
//   };

//   useEffect(() => {
//     const newRoomId = generateRoomId(); // Generate a new room ID when the component mounts
//     setRoomId(newRoomId);
//   }, []);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     const userName = localStorage.getItem("user");
//     const role = localStorage.getItem("userRole");

//     if (storedToken && userName && role) {
//       updateRole(role);
//       setName(userName);
//     } else {
//       console.log("No token or role found in localStorage");
//     }
//   }, [updateRole]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <div className="w-11/12 md:w-2/5 lg:w-1/4 bg-white p-8 rounded-lg shadow-lg text-center">
//         <h1 className="text-3xl font-semibold text-white mb-4 border-b-2 border-white pb-4">
//           Join
//         </h1>
//         <Link
//           onClick={(e) => (!name || !roomId ? e.preventDefault() : null)}
//           to={`/shop/help/chat?name=${name}&room=${roomId}`}
//         >
//           <button
//             className="bg-blue-500 text-white uppercase py-3 px-4 rounded-lg w-full mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
//             type="submit"
//           >
//             Join Chat now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
