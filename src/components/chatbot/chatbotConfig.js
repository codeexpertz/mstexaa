// bot/config.js
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";

const config = {
  botName: "SimpleBot",
  initialMessages: [
    createChatBotMessage("Hi! How can I help you today?", {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
