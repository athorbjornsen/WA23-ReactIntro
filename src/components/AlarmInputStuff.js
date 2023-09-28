import React from "react";

const AlarmInputStuff = ({ inputValue, setInputValue }) => {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);   };

  const handleButtonClick = () => {   
    alert("Input value from App:  " + inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write stuff here..."
      />
      <button onClick={handleButtonClick}>Input</button>
    </div>
  );
};

export default AlarmInputStuff;