import { title } from "@/components/primitives";
import Prompt from '@/components/prompt'
import { fetchAccessToken } from "hume";


export default async function BlogPage() {
  const accessToken = await fetchAccessToken({

    apiKey: String(process.env.HUME_API_KEY),

    secretKey: String(process.env.HUME_SECRET_KEY),

    
  });
  if (!accessToken) {

    throw new Error();

  }
  return (

    <div className="flex">
      {/* ugly implementation of background */}
      
      <div className="z-40 text-black font-[kalam]">
        <Prompt token={accessToken} mode="hard" proompt="give me a paragraph" instruction="You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating 20-30 word paragraphs in this age range. When told \\\'Give me a paragraph!\\\', you will generate exactly one paragraph that a 6th-8th grader might want to learn. Use harder English that an middle schooler could understand! Don't use markdown. No asterisks. Don't use words that are too big either. We encourage you to pull from existing teen literature in the public domain."/>

        <footer className="absolute text-3xl text-slate-600 left-6 bottom-6 ">Hard</footer>    
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-300 to-white z-0"/>

     
    </div>
  );
}
