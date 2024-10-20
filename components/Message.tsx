// ./components/Messages.tsx
"use client";
import { useState } from "react";
import { useVoice,  VoiceReadyState } from "@humeai/voice-react";

export default function Messages({colors}:{colors:String[]}) {
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
        window.location.reload();
      }
      if(msg.type === "assistant_message"){
      return (
        <div key={msg.type + index}>
          <div className=" transition-all ease-in h-2 -rotate-[10deg] transform translate-x-[-120px] -translate-y-[90px] origin-bottom-right rounded-sm font-extra bold text-9x"><div className="bg-white w-[110px] rounded-full border-solid border-3 border-slate-600"><img className="pl-3 h-[100px] w-[90px]" src="https://media.discordapp.net/attachments/1296711558868762687/1297494216137769011/image-removebg-preview.png?ex=67162127&is=6714cfa7&hm=ece879636daeb9249219d557dc3af1c43fd739a10f30393b7bd19b7beb8d5574&=&format=webp&quality=lossless&width=607&height=874"></img></div></div>
          <div className={`bg-gradient-to-tr ${colors[0]} ${colors[1]} border-solid p-4 my-6 rounded-3xl flex-1 font-sans font-semibold text-white text-2xl`}>
            {msg.message.content}
          </div>
        </div>
      );
    }
    else{
      return(
        <>
        <div className={`h-[60px] w-full bg-gradient-to-tr ${colors[0]} ${colors[1]} p-4 my-6 rounded-3xl flex-1 font-sans font-semibold text-white text-2xl`}>
            <i className="mt-3 font-light">listening</i>
        </div>
        </>
      )
    }
    }})}
    
</div>
  );
}
