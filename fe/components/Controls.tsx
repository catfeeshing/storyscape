// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import {Button} from "@nextui-org/react";
export default function Controls({colors}:{colors:String[]}) {
  const { connect, disconnect, readyState } = useVoice();

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <Button className="font-sans font-extrabold"
        onPress={() => {
          disconnect();
        }}
      >
        End Session
      </Button>
    );
  }
  // console.log(colors)
  return (
    <Button className={`font-sans font-extrabold bg-gradient-to-tr ${colors[0]} ${colors[1]} text-white shadow-lg`}
      onPress={() => {
        connect()
          .then(() => {
            /* handle success */
          })
          .catch(() => {
            /* handle error */
          });
      }}
    >
      Start Session
    </Button>
  );
}
