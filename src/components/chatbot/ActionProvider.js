// bot/ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const message = createChatBotMessage("Hi there! How can I help you today?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleName = () => {
    const message = createChatBotMessage("I am a simple chatbot.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleContact = () => {
    const message = createChatBotMessage(
      "You can contact support at support@example.com."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleName,
            handleContact,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
