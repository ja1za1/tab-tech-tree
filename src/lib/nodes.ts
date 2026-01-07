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
  {
    id: 0,
    name: "Steam Technology",
    description: ["Basic technology."],
    imageSrc: "/src/assets/pocao.png",
    position: { left: 80, top: 400 },
    cost: 0,
    isSelected: true,
    isRemovable: false,
    children: [1, 2, 3, 4, 5],
  },
  {
    id: 1,
    name: "Bearings and Pulleys",
    description: ["Fisherman Cottage: food generation +20%"],
    imageSrc: "/src/assets/trigo.png",
    position: { left: 400, top: 200 },
    cost: 100,
    children: [6],
    dependsOn: 0,
    isSelected: false,
  },
  {
    id: 2,
    name: "Assault Rifle",
    description: ["New unit: Soldier"],
    imageSrc: "/src/assets/soldado.png",
    position: { left: 400, top: 330 },
    cost: 120,
    children: [7, 8],
    dependsOn: 0,
    isSelected: false,
  },
  {
    id: 3,
    name: "Mercenaries I",
    description: ["Extra unit at start: Ranger"],
    imageSrc: "/src/assets/pocao.png",
    position: { left: 400, top: 480 },
    cost: 100,
    children: [],
    dependsOn: 0,
    isSelected: false,
  },
  {
    id: 4,
    name: "High-Rise Defenses I",
    description: ["New structure: Wooden Tower"],
    imageSrc: "/src/assets/torre-madeira.png",
    position: { left: 400, top: 550 },
    cost: 100,
    isSelected: false,
    dependsOn: 0,
    children: [],
  },
  {
    id: 5,
    name: "Logistics",
    description: ["+40 Gold income", "+20 Resource Storage"],
    imageSrc: "/src/assets/logistics.png",
    position: { left: 400, bottom: 230 },
    cost: 100,
    isSelected: false,
    dependsOn: 0,
    children: [],
  },
  {
    id: 6,
    name: "Efficient Turbines",
    description: ["Mill: Energy Supply +30%"],
    imageSrc: "/src/assets/raio.png",
    position: { left: 700, top: 200 },
    cost: 120,
    dependsOn: 1,
    children: [],
    isSelected: false,
  },
  {
    id: 7,
    name: "Military Training",
    description: [
      "Buildings: Defensive Barriers +20%",
      "Extra unit at start: Soldier",
    ],
    imageSrc: "/src/assets/porta-pedra.png",
    position: { left: 700, top: 265 },
    cost: 100,
    children: [],
    dependsOn: 2,
    isSelected: false,
  },
  {
    id: 8,
    name: "Hunting Weapons",
    description: ["Hunterman Cottage: Food generation +20%"],
    imageSrc: "/src/assets/trigo.png",
    position: { left: 700, top: 330 },
    cost: 100,
    children: [],
    dependsOn: 2,
    isSelected: false,
  },
];
