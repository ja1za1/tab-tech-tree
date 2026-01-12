import { useAudio } from "@/context/audio-content";
import { useNode } from "@/context/node-content";
import { memo, useCallback } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import NodeWithDescription from "./node-with-description";
import NodeWithoutDescription from "./node-without-description";

const AUDIO_FILES = {
  select: new Audio("/assets/audio/on-select.mp3"),
  unselect: new Audio("/assets/audio/on-unselect.mp3"),
};

interface TechNodeProps {
  id: number;
  name: string;
  description: string[];
  imageSrc: string;
  position: { left?: number; top?: number; bottom?: number; right?: number };
  cost: number;
  isRemovable?: boolean;
  isSelected: boolean;
  canSelectNode: (nodeId: number) => boolean;
  handleNodeToggle: (nodeId: number) => void;
  nodeSelectionOrder?: number;
}

function TechNode({
  id,
  cost,
  description,
  imageSrc,
  isRemovable = true,
  name,
  position,
  isSelected,
  canSelectNode,
  handleNodeToggle,
  nodeSelectionOrder,
}: TechNodeProps) {
  const { isShowingDescription } = useNode();
  const { isMuted } = useAudio();

  const handleClick = useCallback(() => {
    if (!isRemovable || !canSelectNode(id)) {
      return;
    }
    if (!isMuted) {
      if (isSelected) {
        const audio = AUDIO_FILES.unselect.cloneNode() as HTMLAudioElement;
        audio.volume = 0.4;
        audio
          .play()
          .catch((e) => console.error("Audio unselect play error:", e));
      } else {
        const audio = AUDIO_FILES.select.cloneNode() as HTMLAudioElement;
        audio.volume = 0.4;
        audio.play().catch((e) => console.error("Audio select play error:", e));
      }
    }

    handleNodeToggle(id);
  }, [canSelectNode, handleNodeToggle, id, isRemovable, isSelected, isMuted]);

  return isShowingDescription ? (
    <NodeWithDescription
      canSelectNode={canSelectNode}
      cost={cost}
      handleClick={handleClick}
      id={id}
      imageSrc={imageSrc}
      isSelected={isSelected}
      name={name}
      position={position}
      nodeSelectionOrder={nodeSelectionOrder}
      description={description}
    />
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <NodeWithoutDescription
          canSelectNode={canSelectNode}
          cost={cost}
          handleClick={handleClick}
          id={id}
          imageSrc={imageSrc}
          isSelected={isSelected}
          name={name}
          position={position}
          nodeSelectionOrder={nodeSelectionOrder}
        />
      </TooltipTrigger>
      <TooltipContent className="bg-[#1E2B01] w-fit p-2 " side="bottom">
        <div className="flex flex-col space-y-2">
          <span className="font-tab font-bold text-lg text-[#8FA557]">
            {name}
          </span>
          <div className="border-t w-full font-tab text-sm text-[#C3D59B]">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

export default memo(TechNode);
