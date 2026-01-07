import type { Node } from "./all-nodes";

export const COLUMN_4_NODES: Node[] = [
  {
    id: 15,
    name: "Cereal Farming",
    description: ["New building: Farm"],
    imageSrc: "/src/assets/image/farm.png",
    position: { left: 1220, top: 150 },
    cost: 120,
    children: [],
    dependsOn: 13,
    isSelected: false,
  },
];
