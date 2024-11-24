// import React from "react";
// import ReactEmoji from "react-emoji";

// const Message = ({ message: { text = "", user = "" }, name = "" }) => {
//   const trimmedName = name.trim().toLowerCase();
//   const isSentByCurrentUser = user === trimmedName;

//   return (
//     <div
//       className={`flex items-center py-2 px-4 transition duration-200 ease-in-out ${
//         isSentByCurrentUser ? "justify-end" : "justify-start"
//       }`}
//     >
//       {!isSentByCurrentUser && (
//         <p className="text-gray-600 pr-2 text-sm font-medium">{user}</p>
//       )}
//       <div
//         className={`rounded-lg p-3 max-w-[80%] inline-block shadow-md transition-transform duration-200 ease-in-out ${
//           isSentByCurrentUser
//             ? "bg-blue-500 text-white transform hover:scale-105"
//             : "bg-gray-300 text-black transform hover:scale-105"
//         }`}
//       >
//         <p className="text-base break-words">{ReactEmoji.emojify(text)}</p>
//       </div>
//       {isSentByCurrentUser && (
//         <p className="text-gray-600 pl-2 text-sm font-medium">{trimmedName}</p>
//       )}
//     </div>
//   );
// };

// export default Message;

import ReactEmoji from "react-emoji";

const Message = ({ message: { text = "", user = "" }, name = "" }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return (
    <div
      className={`flex items-center py-1 px-5 ${
        isSentByCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isSentByCurrentUser && <p className="text-gray-500 pr-2">{user}</p>}
      <div
        className={`rounded-xl p-3 max-w-[80%] inline-block ${
          isSentByCurrentUser
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        <p className="text-base break-words">{ReactEmoji.emojify(text)}</p>
      </div>
      {isSentByCurrentUser && (
        <p className="text-gray-500 pl-2">{trimmedName}</p>
      )}
    </div>
  );
};

export default Message;
