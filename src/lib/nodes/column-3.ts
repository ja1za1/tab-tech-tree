import { NODE_IDS, type Node } from "./all-nodes";

export const COLUMN_3_NODES: Node[] = [
  {
    id: NODE_IDS.EXPERT_WORKSHOPS,
    name: "Expert Workshops",
    description: ["New building: Wood Workshop", "New building: Cottage"],
    imageSrc: "/src/assets/image/wood-workshop.png",
    position: { left: 940, top: 300 },
    cost: 240,
    children: [NODE_IDS.CEREAL_FARMING],
    dependsOn: NODE_IDS.STEAM_TECHNOLOGY,
    isSelected: false,
  },
  {
    id: NODE_IDS.MECHANIZED_STORAGE,
    name: "Mechanized Storage",
    description: ["New building: Warehouse"],
    imageSrc: "/src/assets/image/warehouse.png",
    position: { left: 940, bottom: 140 },
    cost: 120,
    children: [],
    dependsOn: NODE_IDS.LOGISTICS,
    isSelected: false,
  },
];
