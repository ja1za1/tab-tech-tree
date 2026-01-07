import useTechTree from "@/hooks/useTechTree";
import { ALL_NODES } from "@/lib/nodes";
import TechNode from "./tech-node";

export default function TechTree() {
  const { nodes, toggleNode, canSelectNode } = useTechTree(ALL_NODES);

  return (
    <div className="min-h-screen min-w-screen bg-[#041200] relative">
      <img
        className=" min-h-screen py-3 max-h-screen min-w-full"
        src="/src/assets/tech-tree-board.png"
        alt=""
      />
      {nodes.map((node) => (
        <TechNode
          key={node.id}
          {...node}
          canSelectNode={canSelectNode}
          handleNodeToggle={toggleNode}
        />
      ))}
    </div>
  );
}
