"use client"
import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';
import { Context } from "../Context";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret, router]); // Include 'router' in the dependency array

  if (!showChat) return <div />;

  return (
    <div className="background pt-20 px-10 w-full p-0 m-0">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="4a07c0e4-72cf-4252-bf32-29e763c9a4ea"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
