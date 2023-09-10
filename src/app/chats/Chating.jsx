"use client"
import React, { useEffect, useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import Image from "next/image";
import { getChats } from "../utils/getChats";

const Chating = () => {
  const { user } = UserAuth()
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [delMessage, setdelMessage] = useState("");

  const [chats, setchats] = useState([]);

  console.log("Firebaseuser", chats)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getChats();
        // console.log("User data in component:", userData); 
        setchats(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handelSubmit = async (event) => {
    event.preventDefault();

    const message = event.target.message.value;
    const email = user.email;
    const name = user.displayName;
    const photo = user.photoURL;
    const chatData = { message, email, name, photo };
    console.log("Chat Data:", chatData);
    try {
      const response = await fetch("/api/chats", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(chatData)
      });

      if (response.ok) {
        // Message sent successfully
        console.log("Message sent successfully");
        // Clear the input field after sending the message
        setNewMessage("");
      } else {
        // Handle errors here, e.g., display an error message
        console.error("Error sending message:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };


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
    <div className="w-[70%] mx-auto  border-black m-5 border-2" >
      <header className="bg-blue-500 text-white py-2 text-center">
        <h1 className="text-xl font-semibold">Message for Help</h1>
      </header>
      <div className="flex flex-col carousel carousel-vertical w-[95%] mx-auto rounded h-screen border-black m-5 border-2 p-5">


        <div className="flex-grow p-4">
          <div className="h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.sender === "You" ? "text-right" : "text-left"
                  }`}
              >

              </div>
            ))}
          </div>
        </div>

        <div>
          {chats.map((users, index) => (
            <tr className={`flex flex-col ${users.email === user?.email ? "text-end me-0  " : ""
              } `} key={users._id}>
              {users?.email === user?.email ? (<> <td className={`flex flex-row-reverse gap-5`} >
                <div className={`rounded-full `}>
                  <Image
                    className={`rounded-full ${users.email === user?.email ? "text-end me-0  " : ""
                      }`}
                    src={users.photo}
                    height={40}
                    width={40}
                    alt={`${users.name}'s Profile Photo`}
                  />
                </div>
                <div className="mt-2">{users?.name}</div>
              </td></>):(<><td className={`flex gap-5`} >
                <div className={`rounded-full ${users.email === user?.email ? "text-end me-0  " : ""
                  }`}>
                  <Image
                    className={`rounded-full ${users.email === user?.email ? "text-end me-0  " : ""
                      }`}
                    src={users.photo}
                    height={40}
                    width={40}
                    alt={`${users.name}'s Profile Photo`}
                  />
                </div>
                <div className="mt-2">{users?.name}</div>
              </td></>)}


              <td
                className={`text-start  ms-0 mx-auto inline-block px-3 py-2 rounded-lg shadow ${users.email === user?.email ? "text-end ms-[600px] me-0  inline-block px-3 py-2 rounded-lg bg-blue-500 text-white" : "bg-gray-200"
                  }`}
              >
                {users?.message}
              </td>
            </tr>
          ))}
        </div>



      </div>
      <div className="p-4">
        <form onSubmit={handelSubmit} className="flex space-x-2">
          <div className="relative flex-grow border border-black rounded-md p-2">
            <input
              type="text"
              name="message"
              className="w-full h-full outline-none"
              placeholder="Type your message..."
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            {delMessage && (
              <button
                className="absolute top-0 right-0 px-2 h-full bg-gray-200 hover:bg-gray-300 text-gray-600"
                onClick={() => setdelMessage("")}
              >
                Clear
              </button>
            )}
          </div>

          <input
            type="submit"
            value="Send"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSendMessage}

          />
        </form>
      </div>
    </div>




  );
};

export default Chating;