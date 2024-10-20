import { title } from "@/components/primitives";
import Prompt from '@/components/prompt'
import { fetchAccessToken } from "hume";


export default async function DocsPage() {
  const accessToken = await fetchAccessToken({

    apiKey: String(process.env.HUME_API_KEY),

    secretKey: String(process.env.HUME_SECRET_KEY),

    
  });
  if (!accessToken) {

    throw new Error();

  }
  return (
    <div className="flex transition-all ease-in-out">
    {/* ugly implementation of background */}
    
    <div className="z-40 text-black font-serif">
      <div className="animate-float"><div className="h-4 -rotate-[12deg] transform translate-x-[370px] translate-y-[140px] origin-bottom-right rounded-sm font-extrabold text-9xl">”</div></div>
      <div className="animate-float2"><div className="h-4 rotate-[10deg] transform translate-x-[-400px] translate-y-[100px] origin-bottom-right rounded-sm font-extrabold text-9xl">“</div></div>
      
      <div className=" p-4 pb-4 px-8 rounded-3xl bg-gradient-to-b from-white to-blue-100 ">
      <Prompt token={accessToken} colors={["cyan-700", "slate-600"]} mode="medium" proompt="give me two sentences" instruction="You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating two sentences in this age range. When told \\\'Give me two sentences!\\\', you will generate exactly two (2) sentences that a 4th-6th grader might want to learn. Use simple English that an elementary schooler could understand! Sound more upbeat with the definitions! Don't use \\\'really\\\' that often. Don't use markdown. No asterisks."/>
        <footer className="absolute text-3xl text-slate-600 left-6 bottom-6 ">Medium</footer>   
      </div>
    </div>
    
    <div className=""></div>
    <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-white z-0"/>
    

  </div>
  );
}
