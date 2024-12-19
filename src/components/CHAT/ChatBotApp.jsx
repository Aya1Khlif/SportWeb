import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./chat.css";

const ChatBotApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* أيقونة البوت */}
      <button className="chatbot-icon" onClick={toggleChatbot}>
      <span style={{ fontSize:'25px' }}> 🤖</span>
      </button>

      {/* نافذة البوت */}
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBotApp;
