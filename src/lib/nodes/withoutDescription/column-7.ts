import type { Node } from "../../utils";
import { NODE_IDS } from "../node-ids";
import {
  COLUMN_7_LEFT,
  LINE_1_HEIGHT,
  LINE_5_HEIGHT,
} from "./line-columns-values";

export const COLUMN_7_NODES: Node[] = [
  {
    id: NODE_IDS.GAMES_AND_GAMBLING,
    name: "Games and Gambling",
    description: ["Inn: Mercenaries arrive every 3 days"],
    imageSrc: "/assets/image/potion.png",
    position: { left: COLUMN_7_LEFT, top: LINE_1_HEIGHT },
    cost: 120,
    children: [],
    dependsOn: NODE_IDS.LODGING,
    isSelected: false,
  },
  {
    id: NODE_IDS.ADVANCED_CONSTRUCTION,
    name: "Advanced Construction",
    description: ["New building: Stone Workshop", "New building: Stone House"],
    imageSrc: "/assets/image/advanced-construction.png",
    position: { left: COLUMN_7_LEFT, top: LINE_5_HEIGHT },
    cost: 260,
    children: [
      NODE_IDS.TESLA_COILS,
      NODE_IDS.THERMAL_ENERGY,
      NODE_IDS.ADVANCED_TRAINING,
      NODE_IDS.CONCRETE,
      NODE_IDS.CHEMISTRY,
      NODE_IDS.ADVANCED_MACHINERY,
    ],
    dependsOn: NODE_IDS.EXPERT_WORKSHOPS,
    isSelected: false,
  },
];
