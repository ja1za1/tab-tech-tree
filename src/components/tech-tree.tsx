import useTechTree from "@/hooks/useTechTree";
import { ALL_NODES } from "@/lib/nodes";
import { useRef, useState } from "react";
import TechNode from "./tech-node";

export default function TechTree() {
  const { nodes, toggleNode, canSelectNode } = useTechTree(ALL_NODES);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setStartY(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setScrollTop(scrollContainerRef.current.scrollTop);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
    scrollContainerRef.current.scrollTop = scrollTop - walkY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#041200] relative overflow-auto min-[900px]:overflow-hidden">
      {/* <img
        className="hidden min-[900px]:block fixed min-h-screen py-3 max-h-screen min-w-full"
        src="/src/assets/image/tech-tree-board.png"
        alt=""
      />

      {nodes.map((node) => (
        <TechNode
          key={node.id}
          {...node}
          canSelectNode={canSelectNode}
          handleNodeToggle={toggleNode}
        />
      ))} */}
      <img
        className="hidden min-[900px]:block fixed inset-0 w-full h-screen object-fill pointer-events-none z-10"
        src="/src/assets/image/tech-tree-board.png"
        alt=""
      />

      <div className="fixed inset-0 z-0">
        <div
          ref={scrollContainerRef}
          onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
          onMouseMove={(e) => handleMouseMove(e.nativeEvent)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="absolute left-[5%] right-[5%] top-[12%] bottom-[12%] overflow-auto scrollbar-hide cursor-grab active:cursor-grabbing"
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
