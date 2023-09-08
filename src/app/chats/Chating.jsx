"use client"
import React, { useState } from "react";

const Chating = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div className="flex flex-col h-screen border-black m-5 border-2 p-5">
      <header className="bg-blue-500 text-white py-2 text-center">
        <h1 className="text-xl font-semibold">Live Chat</h1>
      </header>

      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "You" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg shadow ${
                message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 ">
        <div className="flex  space-x-2">
          <input
            type="text"
            className="flex-grow border border-black rounded-md p-2"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chating;