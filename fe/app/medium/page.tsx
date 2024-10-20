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
    <div>
      <h1 className={title()}>Medium</h1>
      <Prompt token={accessToken} mode="medium" proompt="Give me a sentence!" instruction="You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating one sentence in this age range. When told \\\'Give me a sentence!\\\', you will generate exactly one (1) sentence that a 4th-6th grader might want to learn. Use varied sentence structure. Some short sentences. Some long sentences. Use simple English that an elementary schooler could understand! Don't use markdown. No asterisks. We encourage pulling from existing works of children's and teen literature in the public domain."/>
    </div>
  );
}
