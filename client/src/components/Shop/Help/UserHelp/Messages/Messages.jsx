// import React from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
// import Message from "./Message/Message";

// const Messages = ({ messages = [], name = "", isLoading = false }) => {
//   return (
//     <ScrollToBottom className="flex-grow p-5 overflow-auto bg-gray-100 rounded-lg shadow-md">
//       {isLoading ? (
//         <div className="flex justify-center items-center">
//           <p className="text-gray-500">Loading messages...</p>
//         </div>
//       ) : messages.length === 0 ? (
//         <p className="text-center text-gray-500">No messages yet</p>
//       ) : (
//         messages.map((message) => (
//           <Message
//             key={message.id || message.timestamp}
//             message={message}
//             name={name}
//           />
//         ))
//       )}
//     </ScrollToBottom>
//   );
// };

// export default Messages;

import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

const Messages = ({ messages = [], name = "" }) => {
  return (
    <ScrollToBottom className="flex-grow p-5 overflow-auto bg-gray-100 rounded-lg shadow-md">
      {messages.map((message, index) => (
        <Message key={index} message={message} name={name} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
