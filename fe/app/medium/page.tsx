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
      <Prompt token={accessToken} colors={["from-cyan-700", "to-slate-600"]} mode="medium" proompt="give me two sentences" instruction="You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating one sentence in this age range. When told \\\'Give me a sentence!\\\', you will generate exactly one (1) sentence that a 4th-6th grader might want to learn. Use varied sentence structure. Some short sentences. Some long sentences. Use simple English that an elementary schooler could understand! Don't use markdown. No asterisks. We encourage pulling from existing works of children's and teen literature in the public domain."/>
        <footer className="absolute text-3xl text-slate-600 left-6 bottom-6 ">Medium</footer>   
      </div>

    </div>
    <div className=""></div>
    <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-white z-0"/>
    

  </div>
  );
}
