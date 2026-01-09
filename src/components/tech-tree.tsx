import { useDragging } from "@/hooks/useDragging";
import useTechTree from "@/hooks/useTechTree";
import { ALL_NODES } from "@/lib/nodes/all-nodes";
import TechNode from "./tech-node";

export default function TechTree() {
  const { nodes, toggleNode, canSelectNode, selectionOrder, totalCost } =
    useTechTree(ALL_NODES);

  const { scrollContainerRef, dragHandlers } = useDragging();

  return (
    <div className="min-h-screen w-full bg-[#041200] relative overflow-auto min-[900px]:overflow-hidden">
      <img
        className="hidden min-[900px]:block fixed inset-0 w-full h-screen object-fill pointer-events-none z-10"
        src="/src/assets/image/tech-tree-board.png"
        alt=""
      />

      <div className="fixed top-35 left-30 flex flex-col items-center">
        <img src="/src/assets/image/potion.png" alt="" className="size-10" />
        <span className="font-tab text-lg font-bold text-[#8FA557]">
          {totalCost}
        </span>
        <span className="font-tab  text-[#8FA557]">Total Cost</span>
      </div>

      <div className="fixed inset-0 z-0">
        <div
          ref={scrollContainerRef}
          {...dragHandlers}
          className="absolute select-none left-[5%] right-[5%] top-[12%] bottom-[12%] overflow-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="min-h-full">
            {nodes.map((node) => (
              <TechNode
                key={node.id}
                {...node}
                canSelectNode={canSelectNode}
                handleNodeToggle={toggleNode}
                nodeSelectionOrder={
                  node.isSelected
                    ? selectionOrder.indexOf(node.id) + 1
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="min-[900px]:hidden overflow-auto p-4">
        {nodes.map((node) => (
          <TechNode
            key={node.id}
            {...node}
            canSelectNode={canSelectNode}
            handleNodeToggle={toggleNode}
          />
        ))}
      </div> */}
    </div>
  );
}
