"use client";

import type { Node } from "@/lib/utils";
import { useMemo } from "react";

interface TechTreeConnectionsProps {
  nodes: Node[];
}

export default function TechTreeConnections({
  nodes,
}: TechTreeConnectionsProps) {
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
      // Calcula as dimensões máximas da árvore
      const nodeRight = (node.position.left ?? 0) + 264; // 264px é a largura do nodo
      const nodeBottom = (node.position.top ?? 0) + 48; // 48px é a altura do nodo
      maxX = Math.max(maxX, nodeRight);
      maxY = Math.max(maxY, nodeBottom);

      if (node.children && node.children.length > 0) {
        const parentX = (node.position.left ?? 0) + 120; // Center of node (264px width / 2)
        const parentY = (node.position.top ?? 0) + 24; // Center of node (48px height / 2)

        node.children.forEach((childId) => {
          const childNode = nodes.find((n) => n.id === childId);
          if (childNode) {
            const childX = (childNode.position.left ?? 0) + 40;
            const childY = (childNode.position.top ?? 0) + 24;

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
        width: maxX + 100, // Adiciona margem extra
        height: maxY + 100,
      },
    };
  }, [nodes]);

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
