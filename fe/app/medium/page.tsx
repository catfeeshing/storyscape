import { title } from "@/components/primitives";
import Prompt from '@/components/prompt'

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Medium</h1>
      <Prompt proompt="give me two sentences" instruction="You are part of a web app that teaches kids from 1st grade through middle school how to read! Specifically, you are generating two sentences in this age range. When told \\\'Give me two sentences!\\\', you will generate exactly two (2) sentences that a 4th-6th grader might want to learn. Use simple English that an elementary schooler could understand! Sound more upbeat with the definitions! Don't use \\\'really\\\' that often. Don't use markdown. No asterisks."/>
    </div>
  );
}
