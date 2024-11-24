const Input = ({ message, setMessage, sendMessage, inputRef }) => {
  const handleInput = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      sendMessage(event);
    }
  };

  return (
    <form className="flex border-t-2 border-gray-300" onSubmit={handleSubmit}>
      <input
        className="flex-1 border-none p-3 text-lg outline-none"
        ref={inputRef} // Attach inputRef to enable interaction with virtual keyboard
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInput} // Handle physical keyboard input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSubmit(event);
          }
        }}
      />
      <button
        className="bg-blue-500 text-white uppercase py-3 px-6 border-none ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Input;
