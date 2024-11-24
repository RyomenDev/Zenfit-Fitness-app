import { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

import VirtualKeyboard from "../../../../../Utils/VirtualKeyboard";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

const ENDPOINT = "http://localhost:5000"; // Ensure this matches your backend URL
let socket;

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(""); // Message state
  const [messages, setMessages] = useState([]);

  const inputRef = useRef(); // Reference for input field

  useEffect(() => {
    socket = io(ENDPOINT); // Initialize socket connection

    const role = localStorage.getItem("userRole");
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room, role }, (error) => {
      if (error) {
        console.error("Error joining room:", error);
        alert(error); // Show error if joining the room fails
      }
    });

    return () => {
      socket.disconnect(); // Disconnect socket on component unmount
    };
  }, [location.search]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Listen for room data (e.g., users list)
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off("message");
      socket.off("roomData");
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage(""); // Clear input after sending
        inputRef.current.focus(); // Refocus input field
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="flex flex-col h-3/5 w-11/12 md:w-3/5 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
          <InfoBar room={"Chat with Customer Care"} />
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <Messages messages={messages} name={name} />
          </div>
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            inputRef={inputRef} // Pass inputRef to Input component
          />
          <VirtualKeyboard inputRef={inputRef} setMessage={setMessage} />{" "}
          {/* Pass setMessage */}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6366f1 #e5e7eb;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6366f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #4f46e5;
        }
        .message-bubble {
          border-radius: 15px;
          padding: 10px;
          margin-bottom: 10px;
          max-width: 80%;
          animation: fadeIn 0.5s;
        }
        .message-bubble.sent {
          background-color: #60a5fa;
          align-self: flex-end;
        }
        .message-bubble.received {
          background-color: #e5e7eb;
          align-self: flex-start;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Chat;
