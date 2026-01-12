import type { Node } from "@/lib/utils";
import { useState } from "react";
import { FaShareNodes } from "react-icons/fa6";
import NodeCard from "./node-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface ThreePicksProps {
  selectionOrder: number[];
  nodes: Node[];
}

export default function TreePicks({ selectionOrder, nodes }: ThreePicksProps) {
  const [open, setOpen] = useState(false);

  const orderedNodes = selectionOrder
    .map((id) => nodes.find((node) => node.id === id))
    .filter((node) => node !== undefined);

  const nodesWithAccumulatedCost = orderedNodes.map((node, index) => {
    const accumulatedCost = orderedNodes
      .slice(0, index + 1)
      .reduce((sum, n) => sum + n.cost, 0);
    return { ...node, accumulatedCost };
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <div
              className="size-15 shrink-0 cursor-pointer hover:bg-[#01300b] flex items-center rounded-full shadow-md bg-[#02410f] border-2 border-solid border-[#483214] justify-center"
              aria-label={"Show selected nodes in order"}
            >
              <FaShareNodes className="size-6 text-[#8FA557] hover:text-[#8FA557]" />
            </div>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent className="bg-[#1E2B01] p-2" side="bottom">
          <p>Show selected nodes</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className="bg-[#1E2B01] border-2  border-[#483214] font-tab max-h-100 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#C3D59B]">Nodes picked</DialogTitle>
          <DialogDescription>
            {nodesWithAccumulatedCost.length > 0
              ? "Ordered nodes by selected sequence"
              : "No node selected"}
          </DialogDescription>
        </DialogHeader>
        {nodesWithAccumulatedCost.length > 0 && (
          <>
            {nodesWithAccumulatedCost.map((node, index) => (
              <NodeCard
                key={node.id}
                node={node}
                nodeSelectionOrder={index + 1}
                acumulatedCost={node.accumulatedCost}
              />
            ))}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
