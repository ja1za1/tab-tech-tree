import type { Node } from "@/lib/utils";
import { useState } from "react";
import NodeCard from "./node-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
      <DialogTrigger asChild>
        <div className="w-full cursor-pointer hover:bg-[#01300b] h-full flex items-center rounded-full shadow-md bg-[#02410f] border-2 border-solid border-[#483214] p-4">
          <img src="/assets/image/config.png" />
        </div>
      </DialogTrigger>
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
