// ./components/Messages.tsx
"use client";
import { useState } from "react";
import { useVoice,  VoiceReadyState } from "@humeai/voice-react";

export default function Messages() {
  const [aitext, setAIText] = useState("");
  const { messages, connect, disconnect, readyState } = useVoice();
  let x = 0
  function endcall() {
    if(readyState === VoiceReadyState.OPEN && x==1) {
        disconnect();
    }
    
  }

  return (
    // <div>
    //   {messages.map((msg, index) => {
    //     if (msg.type === "user_message" || msg.type === "assistant_message") {
    //         endcall()
    //       if (msg.message.content && (msg.message.content.includes("Good job")||msg.message.content.includes("good job"))){
    //         endcall()
    //         x++
    //       }
    //       if (msg.type === "assistant_message"){
    //       return (
    //         <div key={msg.type + index}>
    //           {/* <div>{msg.message.role}</div> */}
    //           <div>{msg.message.content}</div>
    //         </div>
    //       );
    //     }
    //     }
    //     return null;
    //   })}
    // </div>
    <div>
  {messages
    .filter((msg) => msg.type === "user_message" || msg.type === "assistant_message")
    .slice(-1)
    .map((msg, index) => {
      if(msg.type === "user_message" || msg.type === "assistant_message"){
      if (msg.message.content && (msg.message.content.includes("Good job") || msg.message.content.includes("good job"))) {
        endcall();
      }
      return (
        <div key={msg.type + index}>
          <div className="w-3 overflow-hidden">
          </div>
          <div className="bg-red-200 border-solid border-2 border-red-400 p-4 my-6 rounded-3xl flex-1">
            {msg.message.content}
          </div>
        </div>
      );
    }})}
    
</div>
  );
}
