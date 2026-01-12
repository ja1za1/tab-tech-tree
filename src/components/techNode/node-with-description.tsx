import { cn } from "@/lib/utils";

interface NodeWithDescriptionProps {
  id: number;
  name: string;
  imageSrc: string;
  description: string[];
  position: { left?: number; top?: number; bottom?: number; right?: number };
  cost: number;
  isSelected: boolean;
  canSelectNode: (nodeId: number) => boolean;
  handleClick: () => void;
  nodeSelectionOrder?: number;
}

export default function NodeWithDescription({
  id,
  cost,
  imageSrc,
  name,
  description,
  position,
  isSelected,
  canSelectNode,
  handleClick,
  nodeSelectionOrder,
}: NodeWithDescriptionProps) {
  return (
    <div
      onClick={handleClick}
      className={cn(
        "text-[#8FA557] flex items-center hover:bg-[#01300b] bg-black absolute h-25 w-72 border-2 border-solid border-[#483214] rounded-lg z-10",
        isSelected ? "bg-[#02410f]" : "bg-black",
        canSelectNode(id) ? "cursor-pointer" : "cursor-not-allowed opacity-50"
      )}
      style={{
        top: position.top !== undefined ? `${position.top}px` : undefined,
        left: position.left !== undefined ? `${position.left}px` : undefined,
        bottom:
          position.bottom !== undefined ? `${position.bottom}px` : undefined,
        right: position.right !== undefined ? `${position.right}px` : undefined,
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

        <div className="flex flex-col space-y-1 items-center">
          <span className="font-tab font-bold text-lg text-shadow-lg/20 text-shadow-[#8FA557] text-center leading-tight">
            {name}
          </span>
          {description.map((line, index) => (
            <p
              key={index}
              className="font-tab font-bold text-xs text-shadow-lg/20 text-shadow-[#8FA557] text-center leading-tight"
            >
              {line}
            </p>
          ))}
        </div>
        <span className="font-tab text-xl text-shadow-lg/50 text-shadow-[#8FA557]">
          {cost}
        </span>
      </div>
    </div>
  );
}
