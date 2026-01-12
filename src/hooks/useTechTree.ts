import { NODE_IDS } from "@/lib/nodes/node-ids";
import type { Node } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const TREE_ORDER_PARAM = "order";

const encodeNodeIds = (ids: number[]): string => {
  if (ids.length === 0) {
    return "";
  }
  return ids.map((id) => id.toString(16).padStart(2, "0")).join("");
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

  const getInitialOrderState = (): number[] => {
    const selectedNodesHex = searchParams.get(TREE_ORDER_PARAM) || "";

    if (!selectedNodesHex) {
      return [];
    }

    return decodeNodeIds(selectedNodesHex);
  };

  const [selectionOrder, setSelectionOrder] = useState<number[]>(
    getInitialOrderState()
  );

  const nodes = useMemo(() => {
    const selectedIdsSet = new Set(selectionOrder);

    return initialNodes.map((node) => ({
      ...node,
      isSelected:
        node.id === NODE_IDS.STEAM_TECHNOLOGY || selectedIdsSet.has(node.id),
    }));
  }, [initialNodes, selectionOrder]);

  const totalCost = useMemo(() => {
    return nodes
      .filter((node) => node.isSelected)
      .reduce((sum, node) => sum + node.cost, 0);
  }, [nodes]);

  const updateURL = useCallback(
    (selectedIds: number[]) => {
      if (selectedIds.length === 0) {
        setSearchParams(
          (params) => {
            params.delete(TREE_ORDER_PARAM);
            return params;
          },
          { replace: true }
        );
      } else {
        const hexString = encodeNodeIds(selectedIds);
        setSearchParams({ [TREE_ORDER_PARAM]: hexString }, { replace: true });
      }
    },
    [setSearchParams]
  );

  useEffect(() => {
    updateURL(selectionOrder);
  }, [selectionOrder, updateURL]);

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
      setSelectionOrder((prevOrder) => {
        const node = nodes.find((n) => n.id === nodeId);
        if (!node) return prevOrder;

        let newOrder = [...prevOrder];

        if (!node.isSelected) {
          if (!canSelectNode(nodeId)) {
            return prevOrder;
          }
          if (!newOrder.includes(nodeId)) {
            newOrder.push(nodeId);
          }
        } else {
          newOrder = newOrder.filter((id) => id !== nodeId);

          const deselectChildren = (parentId: number) => {
            const parent = nodes.find((n) => n.id === parentId);
            if (!parent) return;

            parent.children.forEach((childId) => {
              newOrder = newOrder.filter((id) => id !== childId);
              const child = nodes.find((n) => n.id === childId);
              if (child) {
                deselectChildren(childId);
              }
            });
          };

          deselectChildren(nodeId);
        }

        return newOrder;
      });
    },
    [canSelectNode, nodes]
  );

  return { nodes, toggleNode, canSelectNode, selectionOrder, totalCost };
};

export default useTechTree;
