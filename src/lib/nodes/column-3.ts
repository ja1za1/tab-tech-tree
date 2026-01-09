import type { Node } from "../utils";
import {
  COLUMN_3_LEFT,
  LINE_5_HEIGHT,
  LINE_9_HEIGHT,
} from "./line-columns-values";
import { NODE_IDS } from "./node-ids";

export const COLUMN_3_NODES: Node[] = [
  {
    id: NODE_IDS.EXPERT_WORKSHOPS,
    name: "Expert Workshops",
    description: ["New building: Wood Workshop", "New building: Cottage"],
    imageSrc: "/src/assets/image/wood-workshop.png",
    position: { left: COLUMN_3_LEFT, top: LINE_5_HEIGHT },
    cost: 240,
    children: [
      NODE_IDS.CEREAL_FARMING,
      NODE_IDS.REINFORCED_ARMOR,
      NODE_IDS.REINFORCED_PROJECTILES,
      NODE_IDS.OPTICS,
      NODE_IDS.ADVANCED_CONSTRUCTION,
    ],
    dependsOn: NODE_IDS.STEAM_TECHNOLOGY,
    isSelected: false,
  },
  {
    id: NODE_IDS.MECHANIZED_STORAGE,
    name: "Mechanized Storage",
    description: ["New building: Warehouse"],
    imageSrc: "/src/assets/image/warehouse.png",
    position: { left: COLUMN_3_LEFT, top: LINE_9_HEIGHT },
    cost: 120,
    children: [NODE_IDS.STRUCTURE_RECYCLING],
    dependsOn: NODE_IDS.LOGISTICS,
    isSelected: false,
  },
];
