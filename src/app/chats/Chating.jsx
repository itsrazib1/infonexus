// "use client"
// import React, { useState } from "react";
// import { UserAuth } from "../Context/AuthContext";
// import Image from "next/image";

// const Chating = () => {
//   const { user } = UserAuth();
//   console.log(user)

//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "") {
//       setMessages([...messages, { text: newMessage, sender: "You" }]);
//       setNewMessage("");
//     }
//   };
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };
//   return (
//     <div className="flex flex-col h-screen border-black m-5 border-2 p-5">
//       <header className="bg-blue-500 text-white py-2 text-center flex gap-10">
//         <h1 className="text-2xl font-semibold">Hello.... <span className="text-primary">{user.displayName}
//         </span></h1>
//         <div className="w-10 h-10 rounded-full overflow-hidden">
//           <Image
//             src={user.photoURL}
//             height={40}
//             width={40}
//           // alt={`${user.name}'s Profile Photo`}
//           />
//         </div>
//       </header>

//       <div className="flex-grow p-4 overflow-y-auto">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`mb-4 ${message.sender === "You" ? "text-right" : "text-left"
//               }`}
//           >
//             <span
//               className={`inline-block px-3 py-2 rounded-lg shadow ${message.sender === "You"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-black"
//                 }`}
//             >
//               {message.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="p-4 ">
//         <div className="flex space-x-2">
//           <input
//             type="text"
//             className="flex-grow border border-gray-400 rounded-md p-2 focus:outline-none"
//             placeholder="Type your message..."
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             onClick={handleSendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chating;









"use client"
import React, { useState } from "react";

import Image from "next/image";
import { UserAuth } from "../Context/AuthContext";

const Chating = () => {
  const { user } = UserAuth();
  console.log(user)

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
    <div className="px-24 md:px-40    h-1/2">

      <div className="">
        <div className="bg-blue-500 text-white  text-center  flex p-16 py-4 ">
          <h1 className="text-2xl mx-auto font-semibold">Hello.... <span className="text-primary">{user.displayName}
          </span></h1>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={user.photoURL}
              height={40}
              width={40}

            />
          </div>
        </div>
      </div>



      <div className="chat ">
        <div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.sender == "You" ? "text-right" : "text-left"
                }`}
            >
              {/* <div className="chat-header">
                <span className="text-primary gap-8">{user.displayName}
                </span>

              </div> */}
              <div className="flex gap-6 ">

                <div className="chat-image avatar chat-end">
                  <div className="w-10 rounded-full text-justify">
                    <Image
                      src={user.photoURL}
                      height={40}
                      width={40}
                    // alt={`${user.name}'s Profile Photo`}
                    />
                  </div>
                </div>
                <div className="chat-bubble">
                  <h1> {message.text}</h1>

                </div>

              </div>


            </div>
          ))}

        </div>

      </div>
      <div className="chat chat-end">
        <div>
          {messages.map((message, index) => (
            <div
              key={index}

            >
              <div className="chat-header">
                <span className="text-primary gap-8">{user.displayName}
                </span>

              </div>
              <div className="flex gap-6 ">
                <div className="chat-bubble">
                  <h1> {message.text}</h1>

                </div>
                <div className="chat-image avatar chat-end">
                  <div className="w-10 rounded-full text-justify">
                    <Image
                      src={user.photoURL}
                      height={40}
                      width={40}
                    // alt={`${user.name}'s Profile Photo`}
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="p-4 px-48">
        <div className="flex space-x-2 ">
          <input
            type="text"
            className="flex-grow border border-gray-400 rounded-md p-2 focus:outline-none"
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







// <div className="chat chat-start">
//   <div className="chat-image avatar">
//     <div className="w-10 rounded-full">
//       <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//     </div>
//   </div>
//   <div className="chat-header">
//     Obi-Wan Kenobi
//     <time className="text-xs opacity-50">12:45</time>
//   </div>
//   <div className="chat-bubble">You were the Chosen One!</div>
//   <div className="chat-footer opacity-50">
//     Delivered
//   </div>
// </div>
// <div className="chat chat-end">
//   <div className="chat-image avatar">
//     <div className="w-10 rounded-full">
//       <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//     </div>
//   </div>
//   <div className="chat-header">
//     Anakin
//     <time className="text-xs opacity-50">12:46</time>
//   </div>
//   <div className="chat-bubble">I hate you!</div>
//   <div className="chat-footer opacity-50">
//     Seen at 12:46
//   </div>
// </div>
