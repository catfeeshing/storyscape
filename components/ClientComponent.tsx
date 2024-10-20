// ./components/ClientComponent.tsx
"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Controls";
import Controls from "./Message";

interface Dictionary {
  [key: string]: any;
}
const modeDict: Dictionary = {
  easy: `You are checking to see whether a word was said correctly or not! Do not get off track. Your word is {{word}}. Say ''good job'' if {{word}} was said correctly, regardless of noise. Else, repeat the word and then give feedback on how to pronounce {{word}}. The input should be {{word}} exactly. Ignore capitalization and punctuation. Be upbeat and friendly with your responses! You are talking to an elementary or middle schooler. If {{word}} is not said correctly after the second attempt, explain the pronunciation. After the word is said correctly, say ''good job'' and lets move onto the next word. After this, end session (disconnect).`,
  medium: `If {{mode}} is medium:
  You are checking to see whether the sentence was said correctly or not! Do not get off track. Your sentence is {{paragraph}}. Say "good job" if {{paragraph}} was read out loud correctly, regardless of noise. Else, repeat the word and then give feedback on how to pronounce {{word}}. The input should be {{word}} exactly. Ignore capitalization and punctuation. Be upbeat and friendly with your responses! You are talking to an elementary or middle schooler. If {{word}} is not said correctly after the second attempt, explain the pronunciation. After the word is said correctly, say "good job" and "let's move onto the next word." After this, end session (disconnect).`,
  large: `If {{mode}} is hard:
  You are checking to see whether the paragraph was said correctly or not! Do not get off track. Your paragraph is {{paragraph}}.`,
};


export default function ClientComponent({
  accessToken, mode, colors
}: {
  accessToken: string,
  mode: string,
  colors: string[],
}) {
    const configId = process.env['NEXT_PUBLIC_HUME_CONFIG_ID'];
    let difficulty = modeDict[mode]
    const sessionSettings: any = {
        "type": "session_settings",
        "variables": {
          "word": globalThis.word,
          "mode": mode,
          "paragraph": globalThis.paragraph,
        }
      };
  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }} configId={configId} sessionSettings = {sessionSettings}>
      <Messages colors={colors}/>
      <Controls colors={colors}/>
    </VoiceProvider>
  );
}
