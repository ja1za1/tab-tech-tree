import { useDragging } from "@/hooks/useDragging";
import useTechTree from "@/hooks/useTechTree";
import useWindowHeight from "@/hooks/useWindowDimensions";
import { ALL_NODES } from "@/lib/nodes/all-nodes";
import { cn } from "@/lib/utils";
import ShareButton from "./share-button";
import ShowTotalCost from "./show-total-cost";
import TechNode from "./tech-node";
import TechTreeConnections from "./tech-tree-conections";
import TreePicks from "./tree-picks";

export default function TechTree() {
  const { nodes, toggleNode, canSelectNode, selectionOrder, totalCost } =
    useTechTree(ALL_NODES);
  const { scrollContainerRef, dragHandlers } = useDragging();
  const { width, height } = useWindowHeight();

  const THRESHOLD_HEIGHT = 935;
  const THRESHOLD_WIDTH = 1024;
  const IS_THRESHOLD_REACHED =
    height <= THRESHOLD_HEIGHT && width <= THRESHOLD_WIDTH;

  return (
    <div className="min-h-dvh w-full bg-[#041200] relative overflow-auto min-[900px]:overflow-hidden">
      <img
        className="hidden min-[1150px]:block fixed inset-0 w-full h-screen object-fill pointer-events-none z-10"
        src={"/assets/image/tech-tree-board.png"}
        alt=""
      />
      <div
        className={cn(
          "flex flex-row justify-between items-center w-80 fixed z-10 ",
          IS_THRESHOLD_REACHED ? "top-5 left-5" : "top-35 left-35"
        )}
      >
        <ShowTotalCost totalCost={totalCost} />
        <ShareButton />
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
          <div className="min-h-full relative">
            <TechTreeConnections nodes={nodes} />
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

      <div
        className={cn(
          "fixed z-10 select-none",
          IS_THRESHOLD_REACHED
            ? "bottom-5 left-5 size-15"
            : "bottom-40 left-15 size-18"
        )}
      >
        <TreePicks nodes={nodes} selectionOrder={selectionOrder} />
      </div>
    </div>
  );
}
