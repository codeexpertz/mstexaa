// bot/MessageParser.jsx
import React from "react";
import "./Message.css"; // Import your CSS file for message styling

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      actions.handleHello();
    }

    if (lowerCaseMessage.includes("name")) {
      actions.handleName();
    }

    if (lowerCaseMessage.includes("contact")) {
      actions.handleContact();
    }

    // Add more conditions for other predefined questions
  };

  return (
    <div className="message-container">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
