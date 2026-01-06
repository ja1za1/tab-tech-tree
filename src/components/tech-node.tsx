import { cn } from "../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface TechNodeProps {
  id: string;
  name: string;
  description: string[];
  imageSrc: string;
  position: { left?: number; top?: number; bottom?: number; right?: number };
  cost: number;
  isRemovable?: boolean;
  isSelected: boolean;
  canSelectNode: (nodeId: string) => boolean;
  handleNodeToggle: (nodeId: string) => void;
}

export default function TechNode({
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
}: TechNodeProps) {
  const onSelectAudio = new Audio("/src/assets/on-select.mp3");
  const onUnselectAudio = new Audio("/src/assets/on-unselect.mp3");
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          onClick={() => {
            if (!isRemovable || !canSelectNode(id)) {
              return;
            }
            if (isSelected) {
              onUnselectAudio.play();
            } else {
              onSelectAudio.play();
            }
            handleNodeToggle(id);
          }}
          className={cn(
            "text-[#8FA557] flex items-center hover:bg-[#01300b] bg-black absolute h-13 w-70 border-2 border-solid border-[#483214] rounded-full",
            isSelected ? "bg-[#011D07]" : "bg-black",
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
          <div className="w-full flex flex-row items-center p-4 justify-between">
            <img
              className={cn(
                "size-12 rounded-full border",
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
