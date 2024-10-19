// ./components/Messages.tsx
"use client";
import React from 'react'
import { useVoice,  VoiceReadyState } from "@humeai/voice-react";

export default function Messages() {
  const { messages, connect, disconnect, readyState } = useVoice();
  let x = 0
  function endcall() {
    if(readyState === VoiceReadyState.OPEN && x==1) {
        disconnect();
    }
    
  }

  return (
    <div>
      {messages.map((msg, index) => {
        if (msg.type === "user_message" || msg.type === "assistant_message") {
            endcall()
          if (msg.message.content && (msg.message.content.includes("Good job")||msg.message.content.includes("good job"))){
            endcall()
            x++
          }
          return (
            <div key={msg.type + index}>
              <div>{msg.message.role}</div>
              <div>{msg.message.content}</div>
            </div>
          );

        }

        return null;
      })}
    </div>
  );
}
