"use client";

import { useNode } from "@/context/node-content";
import type { Node } from "@/lib/utils";
import { useMemo } from "react";

interface TechTreeConnectionsProps {
  nodes: Node[];
}

export default function TechTreeConnections({
  nodes,
}: TechTreeConnectionsProps) {
  const { isShowingDescription } = useNode();
  const { connections, dimensions } = useMemo(() => {
    const lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      isActive: boolean;
    }> = [];

    let maxX = 0;
    let maxY = 0;

    nodes.forEach((node) => {
      const nodeRight = (node.position.left ?? 0) + 264;
      const nodeBottom = (node.position.top ?? 0) + 48;
      maxX = Math.max(maxX, nodeRight);
      maxY = Math.max(maxY, nodeBottom);

      if (node.children && node.children.length > 0) {
        const parentX = (node.position.left ?? 0) + 120;
        const parentY = isShowingDescription
          ? (node.position.top ?? 0) + 60
          : (node.position.top ?? 0) + 24;

        node.children.forEach((childId) => {
          const childNode = nodes.find((n) => n.id === childId);
          if (childNode) {
            const childX = (childNode.position.left ?? 0) + 40;
            const childY = isShowingDescription
              ? (childNode.position.top ?? 0) + 60
              : (childNode.position.top ?? 0) + 24;

            lines.push({
              x1: parentX,
              y1: parentY,
              x2: childX,
              y2: childY,
              isActive: node.isSelected && childNode.isSelected,
            });
          }
        });
      }
    });

    return {
      connections: lines,
      dimensions: {
        width: maxX + 100,
        height: maxY + 100,
      },
    };
  }, [nodes, isShowingDescription]);

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        left: 0,
        top: 0,
        zIndex: 0,
      }}
    >
      {connections.map((connection, index) => (
        <line
          key={index}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          stroke="#483214"
          strokeWidth={connection.isActive ? 3 : 2}
          opacity={connection.isActive ? 0.8 : 0.3}
        />
      ))}
    </svg>
  );
}
