"use client"
import React, { useContext } from "react";


import { useRouter } from 'next/navigation';

import axios from "axios";
import { Context } from "../Context";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "b9f553f3-cd9a-437f-a1c8-9ae3a00527ab" } }
      )

      .then((r) => {
        router.push("/chats");
      });
  }

  return (
    <div className="background ">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">InfoNexus Chat</div>

          <div className="input-container">
            <input
              placeholder="User Name"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;