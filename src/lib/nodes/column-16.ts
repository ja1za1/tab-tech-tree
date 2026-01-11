import type { Node } from "../utils";
import {
  COLUMN_16_LEFT,
  LINE_1_HEIGHT,
  LINE_3_HEIGHT,
  LINE_7_HEIGHT,
  LINE_9_HEIGHT,
} from "./line-columns-values";
import { NODE_IDS } from "./node-ids";

export const COLUMN_16_NODES: Node[] = [
  {
    id: NODE_IDS.ADVANCED_AMMUNITION,
    name: "Advanced Ammunition",
    description: ["Soldier: +20% damage"],
    imageSrc: "/src/assets/image/sniper-skull.png",
    position: { left: COLUMN_16_LEFT, top: LINE_1_HEIGHT },
    cost: 180,
    children: [NODE_IDS.LASER],
    dependsOn: NODE_IDS.HIGH_TECHNOLOGY,
    isSelected: false,
  },
  {
    id: NODE_IDS.NANOMATERIALS,
    name: "Nanomaterials",
    description: ["Unit: +5% armor"],
    imageSrc: "/src/assets/image/shield.png",
    position: { left: COLUMN_16_LEFT, top: LINE_3_HEIGHT },
    cost: 200,
    children: [
      NODE_IDS.GENETIC_ENGINEERING,
      NODE_IDS.AUGMENTED_REALITY,
      NODE_IDS.DIAMOND_TOOLS,
    ],
    dependsOn: NODE_IDS.HIGH_TECHNOLOGY,
    isSelected: false,
  },
  {
    id: NODE_IDS.SUPERCONDUCTOR,
    name: "Superconductors",
    description: ["Shocking Towers: Energy needed -30%"],
    imageSrc: "/src/assets/image/thunder.png",
    position: { left: COLUMN_16_LEFT, top: LINE_7_HEIGHT },
    cost: 180,
    children: [
      NODE_IDS.HIGH_ENERGY_PLASMA,
      NODE_IDS.OPTIMAL_TESLA_TRANSFER,
      NODE_IDS.SOLAR_ENERGY,
      NODE_IDS.DEEP_DRILLING,
    ],
    dependsOn: NODE_IDS.HIGH_TECHNOLOGY,
    isSelected: false,
  },
  {
    id: NODE_IDS.MUSIC,
    name: "Music",
    description: ["Inn: Mercenaries arrive every 2 days"],
    imageSrc: "/src/assets/image/potion.png",
    position: { left: COLUMN_16_LEFT, top: LINE_9_HEIGHT },
    cost: 200,
    children: [],
    dependsOn: NODE_IDS.HIGH_TECHNOLOGY,
    isSelected: false,
  },
];
