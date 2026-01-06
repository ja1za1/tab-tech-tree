import { useState } from "react";
import { cn } from "../lib/utils";

interface TechNodeProps {
  name: string;
  description: string;
  imageSrc: string;
  position: { left?: number; top?: number; bottom?: number; right?: number };
  cost: number;
  isRemovable?: boolean;
}

export default function TechNode({
  cost,
  description,
  imageSrc,
  isRemovable = true,
  name,
  position,
}: TechNodeProps) {
  const onSelectAudio = new Audio("/src/assets/on-select.mp3");
  const onUnselectAudio = new Audio("/src/assets/on-unselect.mp3");
  const [isSelected, setIsSelected] = useState(!isRemovable);

  return (
    <div
      onClick={() => {
        if (!isRemovable) {
          return;
        }
        if (isSelected) {
          onUnselectAudio.play();
        } else {
          onSelectAudio.play();
        }
        setIsSelected(!isSelected);
      }}
      className={cn(
        "text-[#8FA557] flex items-center hover:bg-[#01300b] bg-black absolute h-15 w-72 border-2 border-solid border-[#483214] cursor-pointer rounded-full",
        isSelected ? "bg-[#011D07]" : "bg-black",
        position.left && `left-${position.left}`,
        position.top && `top-${position.top}`,
        position.bottom && `bottom-${position.bottom}`,
        position.right && `right-${position.right}`
      )}
    >
      <div className="w-full flex flex-row items-center p-4 justify-between">
        <img
          className={cn(
            "size-15 rounded-full border",
            isSelected ? "border-[#483214]" : "border-black"
          )}
          src={imageSrc}
          alt=""
        />

        <span className="font-tab font-bold text-xl text-shadow-lg/20 text-shadow-[#8FA557] text-center leading-tight">
          {name}
        </span>
        <span className="font-tab text-xl text-shadow-lg/50 text-shadow-[#8FA557]">
          {cost}
        </span>
      </div>
    </div>
  );
}
