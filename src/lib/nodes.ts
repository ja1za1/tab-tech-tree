export interface Node {
  id: string;
  name: string;
  description: string[];
  imageSrc: string;
  position: { left?: number; top?: number; bottom?: number; right?: number };
  cost: number;
  isSelected: boolean;
  isRemovable?: boolean;
  dependsOn?: string;
  children: string[];
}

export const ALL_NODES: Node[] = [
  {
    id: "steam-technology",
    name: "Steam Technology",
    description: ["Basic technology."],
    imageSrc: "/src/assets/pocao.png",
    position: { left: 80, top: 400 },
    cost: 0,
    isSelected: true,
    isRemovable: false,
    children: [
      "bearings-and-pulleys",
      "assault-rifle",
      "mercenaries-i",
      "high-rise-defenses-i",
      "logistics",
    ],
  },
  {
    id: "bearings-and-pulleys",
    name: "Bearings and Pulleys",
    description: ["Fisherman Cottage: food generation +20%"],
    imageSrc: "/src/assets/trigo.png",
    position: { left: 400, top: 200 },
    cost: 100,
    children: ["efficient-turbines"],
    dependsOn: "steam-technology",
    isSelected: false,
  },
  {
    id: "assault-rifle",
    name: "Assault Rifle",
    description: ["New unit: Soldier"],
    imageSrc: "/src/assets/soldado.png",
    position: { left: 400, top: 330 },
    cost: 120,
    children: ["military-training", "hunting-weapons"],
    dependsOn: "steam-technology",
    isSelected: false,
  },
  {
    id: "mercenaries-i",
    name: "Mercenaries I",
    description: ["Extra unit at start: Ranger"],
    imageSrc: "/src/assets/pocao.png",
    position: { left: 400, top: 480 },
    cost: 100,
    children: [],
    dependsOn: "steam-technology",
    isSelected: false,
  },
  {
    id: "high-rise-defenses-i",
    name: "High-Rise Defenses I",
    description: ["New structure: Wooden Tower"],
    imageSrc: "/src/assets/torre-madeira.png",
    position: { left: 400, top: 550 },
    cost: 100,
    isSelected: false,
    children: [],
  },
  {
    id: "logistics",
    name: "Logistics",
    description: ["+40 Gold income", "+20 Resource Storage"],
    imageSrc: "/src/assets/logistics.png",
    position: { left: 400, bottom: 230 },
    cost: 100,
    isSelected: false,
    children: [],
  },
  {
    id: "efficient-turbines",
    name: "Efficient Turbines",
    description: ["Mill: Energy Supply +30%"],
    imageSrc: "/src/assets/raio.png",
    position: { left: 700, top: 200 },
    cost: 120,
    dependsOn: "bearings-and-pulleys",
    children: [],
    isSelected: false,
  },
  {
    id: "military-training",
    name: "Military Training",
    description: [
      "Buildings: Defensive Barriers +20%",
      "Extra unit at start: Soldier",
    ],
    imageSrc: "/src/assets/porta-pedra.png",
    position: { left: 700, top: 265 },
    cost: 100,
    children: [],
    dependsOn: "assault-rifle",
    isSelected: false,
  },
  {
    id: "hunting-weapons",
    name: "Hunting Weapons",
    description: ["Hunterman Cottage: Food generation +20%"],
    imageSrc: "/src/assets/trigo.png",
    position: { left: 700, top: 330 },
    cost: 100,
    children: [],
    dependsOn: "assault-rifle",
    isSelected: false,
  },
];
