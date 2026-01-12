import { useAudio } from "@/context/audio-content";
import { Volume2, VolumeX } from "lucide-react";

import { Button } from "./ui/button";

export function MuteButton() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <Button
      onClick={toggleMute}
      variant="outline"
      size="icon"
      className="bg-[#02410f] size-15 rounded-full cursor-pointer border-2 border-[#483214] hover:bg-[#01300b] text-[#8FA557] hover:text-[#8FA557]"
      aria-label={isMuted ? "Enable sound" : "Disabled sound"}
    >
      {isMuted ? (
        <VolumeX className="size-6" />
      ) : (
        <Volume2 className="size-6" />
      )}
    </Button>
  );
}
