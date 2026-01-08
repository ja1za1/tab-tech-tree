import { COLUMN_1_NODES } from "./column-1";
import { COLUMN_2_NODES } from "./column-2";
import { COLUMN_3_NODES } from "./column-3";
import { COLUMN_4_NODES } from "./column-4";
import { COLUMN_5_NODES } from "./column-5";
import { COLUMN_6_NODES } from "./column-6";

export interface Node {
  id: number;
  name: string;
  description: string[];
  imageSrc: string;
  position: { left?: number; top?: number; bottom?: number; right?: number };
  cost: number;
  isSelected: boolean;
  isRemovable?: boolean;
  dependsOn?: number;
  children: number[];
}

export const ALL_NODES: Node[] = [
  ...COLUMN_1_NODES,
  ...COLUMN_2_NODES,
  ...COLUMN_3_NODES,
  ...COLUMN_4_NODES,
  ...COLUMN_5_NODES,
  ...COLUMN_6_NODES,
];
