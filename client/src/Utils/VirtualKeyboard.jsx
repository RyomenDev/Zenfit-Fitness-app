import React, { useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css"; // Import the default styles

const VirtualKeyboard = ({ inputRef, setMessage }) => {
  const keyboardRef = useRef();

  const handleChange = (input) => {
    if (inputRef.current) {
      inputRef.current.value = input;
      setMessage(input); // Update the message state
    }
  };

  return (
    <div>
      <Keyboard
        ref={keyboardRef}
        onChange={handleChange} // Listen to virtual keyboard input
      />
    </div>
  );
};

export default VirtualKeyboard;
