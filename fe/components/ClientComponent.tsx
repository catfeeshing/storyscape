// ./components/ClientComponent.tsx
"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Controls";
import Controls from "./Message";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
    const configId = process.env['NEXT_PUBLIC_HUME_CONFIG_ID'];
    const sessionSettings: any = {
        "type": "session_settings",
        "variables": {
          "word": globalThis.word,
        }
      };
  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }} configId={configId} sessionSettings = {sessionSettings}>
      <Messages />
      <Controls />
    </VoiceProvider>
  );
}
