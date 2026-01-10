import type { Node } from "../utils";
import {
  COLUMN_11_LEFT,
  LINE_2_HEIGHT,
  LINE_5_HEIGHT,
  LINE_7_HEIGHT,
  LINE_8_HEIGHT,
} from "./line-columns-values";
import { NODE_IDS } from "./node-ids";

export const COLUMN_11_NODES: Node[] = [
  {
    id: NODE_IDS.HIGH_VOLTAGE_IONIZER,
    name: "High Voltage Ionizer",
    description: [
      "Shocking Tower: Attack Range +1",
      "Shocking Tower: View Range +1",
    ],
    imageSrc: "/src/assets/image/circle-plus.png",
    position: { left: COLUMN_11_LEFT, top: LINE_2_HEIGHT },

    cost: 180,
    children: [],
    dependsOn: NODE_IDS.PLASMA_SPHERES,
    isSelected: false,
  },
  {
    id: NODE_IDS.ADVANCED_MACHINERY,
    name: "Advanced Machinery",
    description: ["New building: Foundry", "New building: Oil Platform"],
    imageSrc: "/src/assets/image/advanced-machinery.png",
    position: { left: COLUMN_11_LEFT, top: LINE_5_HEIGHT },
    cost: 280,
    children: [
      NODE_IDS.MECHANICAL_ENGINEERING,
      NODE_IDS.STEEL_TURBINES,
      NODE_IDS.BIOCHEMISTRY,
      NODE_IDS.TITANIUM,
      NODE_IDS.HIGH_TECHNOLOGY,
    ],
    dependsOn: NODE_IDS.ADVANCED_CONSTRUCTION,
    isSelected: false,
  },
  {
    id: NODE_IDS.BRONZE_FORGING,
    name: "Bronze Forging",
    description: ["New wonder: The Victorious"],
    imageSrc: "/src/assets/image/bronze-forging.png",
    position: { left: COLUMN_11_LEFT, top: LINE_7_HEIGHT },
    cost: 200,
    children: [],
    dependsOn: NODE_IDS.REINFORCED_CONCRETE,
    isSelected: false,
  },
  {
    id: NODE_IDS.MONUMENTS,
    name: "Monuments",
    description: ["Inn: Prestige Factor +50%"],
    imageSrc: "/src/assets/image/potion.png",
    position: { left: COLUMN_11_LEFT, top: LINE_8_HEIGHT },
    cost: 120,
    children: [],
    dependsOn: NODE_IDS.CLIMATE_CONTROL,
    isSelected: false,
  },
];
