import { memo, useCallback } from "react";
import { cn } from "../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
  const handleClick = useCallback(() => {
    if (!isRemovable || !canSelectNode(id)) {
      return;
    }
    if (isSelected) {
      const audio = AUDIO_FILES.unselect.cloneNode() as HTMLAudioElement;
      audio.volume = 0.4;
      audio.play().catch((e) => console.error("Audio unselect play error:", e));
    } else {
      const audio = AUDIO_FILES.select.cloneNode() as HTMLAudioElement;
      audio.volume = 0.4;
      audio.play().catch((e) => console.error("Audio select play error:", e));
    }
    handleNodeToggle(id);
  }, [canSelectNode, handleNodeToggle, id, isRemovable, isSelected]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          onClick={handleClick}
          className={cn(
            "text-[#8FA557] flex items-center hover:bg-[#01300b] bg-black absolute h-12 w-64 border-2 border-solid border-[#483214] rounded-full z-10",
            isSelected ? "bg-[#02410f]" : "bg-black",
            canSelectNode(id)
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          )}
          style={{
            top: position.top !== undefined ? `${position.top}px` : undefined,
            left:
              position.left !== undefined ? `${position.left}px` : undefined,
            bottom:
              position.bottom !== undefined
                ? `${position.bottom}px`
                : undefined,
            right:
              position.right !== undefined ? `${position.right}px` : undefined,
          }}
        >
          <div className="w-full flex flex-row items-center p-4 justify-between relative">
            {nodeSelectionOrder !== undefined && (
              <span className="font-tab text-lg text-[#8FA557] absolute left-1 -top-1">
                {nodeSelectionOrder}
              </span>
            )}
            <img
              className={cn(
                "size-11 rounded-full border",
                isSelected ? "border-[#483214]" : "border-black"
              )}
              src={imageSrc}
              alt=""
            />

            <span className="font-tab font-bold text-lg text-shadow-lg/20 text-shadow-[#8FA557] text-center leading-tight">
              {name}
            </span>
            <span className="font-tab text-xl text-shadow-lg/50 text-shadow-[#8FA557]">
              {cost}
            </span>
          </div>
        </div>
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
