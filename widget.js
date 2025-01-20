import React from "react";

const CustomWidget = (props) => {
  const { userName, userMessageCount, botMood } = props;

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h3>Custom Widget</h3>
      <p>This is a custom widget example.</p>
      <p>User Name: {userName}</p>
      <p>Message Count: {userMessageCount}</p>
      <p>Bot Mood: {botMood}</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default CustomWidget;