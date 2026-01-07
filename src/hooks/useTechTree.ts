import type { Node } from "@/lib/nodes";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const encodeNodeIds = (ids: number[]): string => {
  const sortedIds = ids.filter((id) => id !== 0).sort((a, b) => a - b);

  if (sortedIds.length === 0) {
    return "";
  }

  return sortedIds.map((id) => id.toString(16).padStart(2, "0")).join("");
};

const decodeNodeIds = (hexString: string): number[] => {
  if (!hexString) return [];

  const ids: number[] = [];
  for (let i = 0; i < hexString.length; i += 2) {
    const hex = hexString.substr(i, 2);
    const id = parseInt(hex, 16);
    if (!isNaN(id)) {
      ids.push(id);
    }
  }
  return ids;
};

const useTechTree = (initialNodes: Node[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialState = (): Node[] => {
    const selectedHex = searchParams.get("tech") || "";

    if (!selectedHex) {
      return initialNodes;
    }

    const selectedIds = decodeNodeIds(selectedHex);

    return initialNodes.map((node) => ({
      ...node,
      isSelected: node.id === 0 || selectedIds.includes(node.id),
    }));
  };

  const [nodes, setNodes] = useState<Node[]>(getInitialState());

  const updateURL = useCallback(
    (selectedIds: number[]) => {
      const idsForURL = selectedIds.filter((id) => id !== 0);

      if (idsForURL.length === 0) {
        setSearchParams(
          (params) => {
            params.delete("tech");
            return params;
          },
          { replace: true }
        );
      } else {
        const hexString = encodeNodeIds(idsForURL);
        setSearchParams({ tech: hexString }, { replace: true });
      }
    },
    [setSearchParams]
  );

  useEffect(() => {
    const selectedIds = nodes
      .filter((node) => node.isSelected)
      .map((node) => node.id);

    updateURL(selectedIds);
  }, [nodes, updateURL]);

  const canSelectNode = useCallback(
    (nodeId: number) => {
      const node = nodes.find((n) => n.id === nodeId);

      if (!node) return false;

      if (!node.dependsOn) return true;

      const parentNode = nodes.find((n) => n.id === node.dependsOn);
      return parentNode?.isSelected || false;
    },
    [nodes]
  );

  const toggleNode = useCallback(
    (nodeId: number) => {
      setNodes((prevNodes) => {
        const updatedNodes = [...prevNodes];

        const nodeIndex = updatedNodes.findIndex((n) => n.id === nodeId);
        if (nodeIndex === -1) return prevNodes;

        const node = updatedNodes[nodeIndex];

        if (!node.isSelected) {
          if (!canSelectNode(nodeId)) {
            return prevNodes;
          }
          updatedNodes[nodeIndex] = { ...node, isSelected: true };
        } else {
          updatedNodes[nodeIndex] = { ...node, isSelected: false };

          const deselectChildren = (parentId: number) => {
            const parent = updatedNodes.find((n) => n.id === parentId);
            if (!parent) return;

            parent.children.forEach((childId) => {
              const childIndex = updatedNodes.findIndex(
                (n) => n.id === childId
              );
              if (childIndex !== -1) {
                updatedNodes[childIndex] = {
                  ...updatedNodes[childIndex],
                  isSelected: false,
                };
                deselectChildren(updatedNodes[childIndex].id);
              }
            });
          };

          deselectChildren(nodeId);
        }

        return updatedNodes;
      });
    },
    [canSelectNode]
  );

  return { nodes, toggleNode, canSelectNode };
};

export default useTechTree;
