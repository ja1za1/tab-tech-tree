import { createContext, useContext, useState, type ReactNode } from "react";

interface NodeContextType {
  isShowingDescription: boolean;
  toggleDescription: () => void;
}

/* eslint-disable react-refresh/only-export-components */

const NodeContext = createContext<NodeContextType | undefined>(undefined);

export function NodeProvider({ children }: { children: ReactNode }) {
  const [isShowingDescription, setIsShowingDescription] = useState(false);

  const toggleDescription = () => {
    setIsShowingDescription((prev) => !prev);
  };

  return (
    <NodeContext.Provider value={{ isShowingDescription, toggleDescription }}>
      {children}
    </NodeContext.Provider>
  );
}

export function useNode() {
  const context = useContext(NodeContext);
  if (context === undefined) {
    throw new Error("useNode must be used within an NodeProvider");
  }
  return context;
}
