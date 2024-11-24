import onlineIcon from "../../../../../assets/icons/onlineIcon.png"; // Import the online icon image

// TextContainer component displays information about the app and a list of users currently online
const TextContainer = ({ users }) => {
  return (
    <>
      <div className="flex flex-col justify-between text-white p-4 bg-gray-800 rounded-lg shadow-lg h-3/5 max-w-md">
        {/* Static information about the chat application */}
        {/* <div>
          <h1 className="text-2xl font-bold mb-2">
            Realtime Chat Application{" "}
            <span role="img" aria-label="emoji">
              💬
            </span>
          </h1>
          <h2 className="text-lg mb-2">
            Created with React, Express, Node, and Socket.IO{" "}
            <span role="img" aria-label="emoji">
              ❤️
            </span>
          </h2>
          <h2 className="text-lg">
            Try it out right now!{" "}
            <span role="img" aria-label="emoji">
              ⬅️
            </span>
          </h2>
        </div> */}

        {/* Conditional rendering: display the list of users if there are any */}
        {users && users.length > 0 && (
          <div>
            <h1 className="text-xl font-semibold mb-2">
              People currently chatting:
            </h1>
            <div className="flex flex-col">
              {users.map(({ name }) => (
                // Map over the users array and display each user's name with an online icon
                <div key={name} className="flex items-center mb-1">
                  <span className="text-md">{name}</span>
                  <img
                    alt="Online Icon"
                    src={onlineIcon}
                    className="ml-2 w-4 h-4"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TextContainer;

