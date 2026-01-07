import { COLUMN_1_NODES } from "./column-1";
import { COLUMN_2_NODES } from "./column-2";
import { COLUMN_3_NODES } from "./column-3";
import { COLUMN_4_NODES } from "./column-4";

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

export const NODE_IDS = {
  STEAM_TECHNOLOGY: 0,
  BEARINGS_AND_PULLEYS: 1,
  ASSAULT_RIFLE: 2,
  MERCENARIES_I: 3,
  HIGH_RISE_DEFENSES_I: 4,
  LOGISTICS: 5,
  EFFICIENT_TURBINES: 6,
  MILITARY_TRAINING: 7,
  HUNTING_WEAPONS: 8,
  MERCENARIES_II: 9,
  WOOD_BUTTRESSES: 10,
  BASIC_SUPLIES: 11,
  GOLD_TRANSPORTATION: 12,
  EXPERT_WORKSHOPS: 13,
  MECHANIZED_STORAGE: 14,
  CEREAL_FARMING: 15,
  REINFORCED_ARMOUR: 16,
  REINFORCED_PROJECTILES: 17,
  OPTICS: 18,
  BARRICADES: 19,
  MEDICINE: 20,
  STRUCTURE_RECYCLING: 21,
  WOOD_TRANSPORTATION: 22,
};

export const ALL_NODES: Node[] = [
  ...COLUMN_1_NODES,
  ...COLUMN_2_NODES,
  ...COLUMN_3_NODES,
  ...COLUMN_4_NODES,
];
