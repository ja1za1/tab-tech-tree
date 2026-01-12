import type { Node } from "../../utils";
import { NODE_IDS } from "../node-ids";
import {
  COLUMN_15_LEFT,
  LINE_10_HEIGHT,
  LINE_5_HEIGHT,
} from "./line-columns-values";

export const COLUMN_15_NODES: Node[] = [
  {
    id: NODE_IDS.HIGH_TECHNOLOGY,
    name: "High Technology",
    description: ["Building time -10%"],
    imageSrc: "/assets/image/potion.png",
    position: { left: COLUMN_15_LEFT, top: LINE_5_HEIGHT },
    cost: 300,
    children: [
      NODE_IDS.ADVANCED_AMMUNITION,
      NODE_IDS.NANOMATERIALS,
      NODE_IDS.SUPERCONDUCTOR,
      NODE_IDS.MUSIC,
    ],
    dependsOn: NODE_IDS.ADVANCED_MACHINERY,
    isSelected: false,
  },
  {
    id: NODE_IDS.INGOT_TRANSPORT,
    name: "Ingot Transport",
    description: ["+300 gold every train"],
    imageSrc: "/assets/image/train.png",
    position: { left: COLUMN_15_LEFT, top: LINE_10_HEIGHT },
    cost: 300,
    children: [NODE_IDS.ARTILLERY_TRANSPORT],
    dependsOn: NODE_IDS.OIL_TRANSPORTATION,
    isSelected: false,
  },
];
