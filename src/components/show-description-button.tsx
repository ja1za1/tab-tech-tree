import { Grid2x2Check, Grid2x2X } from "lucide-react";

import { useNode } from "@/context/node-content";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ShowDescriptionButton() {
  const { isShowingDescription, toggleDescription } = useNode();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={toggleDescription}
          variant="outline"
          size="icon"
          className="bg-[#02410f] size-15 rounded-full cursor-pointer border-2 border-[#483214] hover:bg-[#01300b] text-[#8FA557] hover:text-[#8FA557]"
          aria-label={
            isShowingDescription
              ? "Disable node description"
              : "Enable node description"
          }
        >
          {isShowingDescription ? (
            <Grid2x2X className="size-6" />
          ) : (
            <Grid2x2Check className="size-6" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-[#1E2B01] w-fit p-2" side="bottom">
        <p>
          {isShowingDescription
            ? "Disable node description"
            : "Enable node description"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
