"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import config from "@/components/chatbot/chatbotConfig";
import MessageParser from "@/components/chatbot//MessageParser";
import ActionProvider from "@/components/chatbot//ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="bg-blue-500 m-2 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none"
        onClick={toggleChatbot}
      >
        {isOpen ? "Close Chatbot" : "Open Chatbot"}
      </button>
      {isOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </>
  );
};

export default Chat;
