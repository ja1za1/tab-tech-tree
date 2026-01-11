import type { Node } from "@/lib/utils";
interface NodeCardProps {
  node: Node;
  nodeSelectionOrder: number;
  acumulatedCost: number;
}

export default function NodeCard({
  node,
  nodeSelectionOrder,
  acumulatedCost,
}: NodeCardProps) {
  return (
    <div className="flex flex-row space-x-5 items-center font-tab border-2 border-[#483214] p-2  text-[#C3D59B]">
      <div className="">{nodeSelectionOrder}</div>
      <img src={node.imageSrc} className="max-h-12" />
      <div className="flex flex-col space-y-1 flex-1">
        <span className="font-bold">
          {node.name} - {node.cost} points
        </span>
        {node.description.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
      <span className="text-lg">{acumulatedCost}</span>
    </div>
  );
}
