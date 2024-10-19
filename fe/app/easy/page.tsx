import { title } from "@/components/primitives";
import Prompt from '@/components/prompt'
import ClientComponent from "@/components/ClientComponent";
import { fetchAccessToken } from "hume";

export default async function AboutPage() {

  const accessToken = await fetchAccessToken({

    apiKey: String(process.env.HUME_API_KEY),

    secretKey: String(process.env.HUME_SECRET_KEY),

    
  });
  if (!accessToken) {

    throw new Error();

  }
  return (
    <div>
      <h1 className={title()}>Easy</h1>
      <Prompt proompt="give me a word!" instruction="You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating single words in this age range. When told \\\'Give me a word!\\\', you will generate exactly one (1) word that a 4th-6th grader might want to learn. You should never give the same word twice. Use all lowercase! After printing the word, print the part of speech. Then print the most common definition of the word. Do not use full sentences. Use simple English that an elementary schooler could understand! Sound more upbeat with the definitions! Don't use \\\'really\\\' that often. Don't use markdown. No asterisks. Keep definitions descriptive and fun. Within the definitions, don't use words that are too big either."/>
      
      <ClientComponent accessToken={accessToken} />    
    </div>
  );
}
