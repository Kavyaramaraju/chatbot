
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import CustomWidget from "../widgets/CustomWidget"; 

const config = {
  initialMessages: [createChatBotMessage("Welcome! How can I help you today?")],
  
  // Custom styles
  botName: "ChatBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E", // bot message box will be blue color.
    },
    chatButton: {
      backgroundColor: "#000000", // button will be black color.
    },
  },

  // State management
  state: {
    userName: "", // This variable will store user name.
    userMessageCount: 0, // Track the number of messages sent by the user.
    botMood: "neutral", // Represents the mood of the bot.
  },

  // Widgets
  widgets: [
    {
      widgetName: "customWidget",
      widgetFunc: (props) => <CustomWidget {...props} />,
      mapStateToProps: ["userName"],
    },
  ],
};

export default config;