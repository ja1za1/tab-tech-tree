import type { Node } from "@/lib/nodes";
import { useCallback, useState } from "react";

const useTechTree = (initialNodes: Node[]) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);

  // Função para verificar se um nó pode ser selecionado
  const canSelectNode = useCallback(
    (nodeId: string) => {
      const node = nodes.find((n) => n.id === nodeId);

      if (!node) return false;

      // Se o nó não tem dependências, pode ser selecionado
      if (!node.dependsOn) return true;

      // Verifica se o nó pai está selecionado
      const parentNode = nodes.find((n) => n.id === node.dependsOn);
      return parentNode?.isSelected || false;
    },
    [nodes]
  );

  // Função que garante consistência durante a atualização
  const toggleNode = useCallback(
    (nodeId: string) => {
      setNodes((prevNodes) => {
        // 1. Cria cópia dos nós
        const updatedNodes = [...prevNodes];

        // 2. Encontra o índice do nó clicado
        const nodeIndex = updatedNodes.findIndex((n) => n.id === nodeId);
        if (nodeIndex === -1) return prevNodes;

        const node = updatedNodes[nodeIndex];

        // 3. Lógica de seleção
        if (!node.isSelected) {
          // Verifica se pode selecionar
          if (!canSelectNode(nodeId)) {
            return prevNodes;
          }
          // Seleciona o nó
          updatedNodes[nodeIndex] = { ...node, isSelected: true };
        } else {
          // 4. Lógica de deseleção (inclui filhos)
          updatedNodes[nodeIndex] = { ...node, isSelected: false };

          // Função auxiliar para deselecionar filhos recursivamente
          const deselectChildren = (parentId: string) => {
            const parent = updatedNodes.find((n) => n.id === parentId);
            if (!parent) return;

            parent.children.forEach((childId) => {
              const childIndex = updatedNodes.findIndex(
                (n) => n.id === childId
              );
              if (childIndex !== -1) {
                // Deseleciona o filho
                updatedNodes[childIndex] = {
                  ...updatedNodes[childIndex],
                  isSelected: false,
                };
                // Deseleciona os filhos do filho (recursivo)
                deselectChildren(childId);
              }
            });
          };

          // Inicia a deseleção em cascata
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
