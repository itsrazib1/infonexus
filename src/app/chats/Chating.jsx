"use client"
import React, { useState } from "react";
import { UserAuth } from "../Context/AuthContext";

const Chating = () => {
  const {user} = UserAuth()
  // console.log(user)
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const HandelToAllChatDelete = () =>{
    fetch ("/api/chats",{
      method:"DELETE"
    })
  }

  const handelSubmit = event =>{
    event.preventDefault()
    const message = event.target.message.value;
    const email = user.email;
    const name = user.displayName;
    const photo = user.photoURL;
    const chatData = {message ,email, name, photo};
    console.log(chatData);
    fetch("/api/chats", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chatData)
    })
  }

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
        <h1 className="text-xl font-semibold">Message for Help</h1>
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
        <form onSubmit={handelSubmit} className="flex  space-x-2">
          <input
            type="text"
            name="message"
            className="flex-grow border border-black rounded-md p-2"
            placeholder="Type your message..."
            // value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <input 
          type="submit" value="Send"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSendMessage}
          />
        </form>
        <button onClick={HandelToAllChatDelete}>Delete all chat history</button>
      </div>
    </div>
  );
};

export default Chating;