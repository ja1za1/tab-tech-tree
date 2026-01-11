# TAB Tech Tree - Technology Tree Builder

An interactive technology tree builder for **They Are Billions**, developed with React. This project faithfully recreates the design and visual experience of the original game's technology tree, providing an immersive and intuitive interface to create and visualize different technology combinations.

## 🎮 About the Project

This project allows **They Are Billions** players and fans to plan and share their technology strategies in a visual and interactive way. The interface is entirely based on the design of the game's own technology tree, ensuring a familiar and immersive experience. Build your perfect tech path, track costs, and share your builds with others through shareable URLs.

### ✨ Features

- **Authentic Visual Interface**: Design faithful to the original game's technology tree with background board image
- **Interactive Selection**: Click to select/deselect technologies with visual feedback
- **Selection Order Tracking**: Selected technologies are numbered in the order they were chosen
- **Dependency Validation**: System that ensures only technologies with met prerequisites can be selected
- **Visual Connections**: Lines connecting parent and child technologies for better visualization
- **Total Cost Calculator**: Real-time calculation of the total cost of selected technologies
- **Drag and Navigate**: Drag the screen to explore the entire technology tree
- **URL Sharing**: The tree state is saved in the URL, allowing you to share your configurations
- **Share Button**: One-click copy to clipboard functionality for easy sharing
- **Tree Picks Dialog**: View all selected technologies in order with accumulated costs
- **Sound Effects**: Selection/deselection sounds for greater immersion
- **Informative Tooltips**: Hover over technologies to see complete details
- **Responsive Design**: Adapts to different screen sizes with optimized layouts

## 🚀 Technologies Used

- **React 19** - JavaScript library for building interfaces
- **TypeScript** - Static typing for greater code safety
- **Vite** - Modern and fast build tool
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Shadcn/UI** - Accessible component library (Tooltip, Dialog)
- **Radix UI** - Primitive UI components (Dialog, Tooltip, Slot)
- **React Router DOM** - Route management and URL parameters
- **Lucide React** - Icon library
- **React Icons** - Additional icon library

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tab-tech-tree
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the project in development mode:

```bash
pnpm dev
```

4. Access `http://localhost:5173` in your browser

## 🛠️ Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Creates a production build
- `pnpm preview` - Previews the production build
- `pnpm lint` - Runs the linter to check the code

## 🎯 How to Use

1. **Select Technologies**: Click on any technology to select it (green) or deselect it
2. **Navigate the Tree**: Drag the screen to explore all available technologies
3. **View Details**: Hover over a technology to see its complete description
4. **Track Selection Order**: Selected technologies show numbers indicating the order they were chosen
5. **Monitor Costs**: The total cost of all selected technologies is displayed at the top
6. **View Tree Picks**: Click the configuration icon at the bottom to see all selected technologies in order with accumulated costs
7. **Share**: Click the "Share tree" button to copy the URL to your clipboard, or simply copy the URL from your browser

### Dependency Rules

- Only technologies with met prerequisites can be selected
- When deselecting a technology, all dependent technologies are automatically deselected
- The base technology "Steam Technology" is always selected and cannot be removed
- Technologies are numbered in the order they were selected

## 📁 Project Structure

```
tab-tech-tree/
├── src/
│   ├── components/              # React components
│   │   ├── tech-tree.tsx        # Main tree component
│   │   ├── tech-node.tsx        # Individual node component
│   │   ├── tech-tree-conections.tsx  # Visual connections between nodes
│   │   ├── share-button.tsx     # Share/copy URL button
│   │   ├── show-total-cost.tsx  # Total cost display
│   │   ├── tree-picks.tsx       # Dialog showing selected nodes
│   │   ├── node-card.tsx        # Card component for tree picks
│   │   └── ui/                  # Reusable UI components
│   │       ├── tooltip.tsx
│   │       ├── dialog.tsx
│   │       └── button.tsx
│   ├── hooks/                   # Custom hooks
│   │   ├── useTechTree.ts       # Tree management logic
│   │   ├── useDragging.ts       # Drag and scroll logic
│   │   └── useWindowDimensions.ts  # Window size tracking
│   ├── lib/                     # Utilities and data
│   │   ├── nodes/               # Node definitions organized by columns
│   │   │   ├── all-nodes.ts     # Aggregated all nodes
│   │   │   ├── column-1.ts      # Column 1 nodes
│   │   │   ├── column-2.ts      # Column 2 nodes
│   │   │   ├── ...              # Columns 3-17
│   │   │   ├── node-ids.ts      # Node ID constants
│   │   │   └── line-columns-values.ts # Values for absolute position of all nodes
│   │   └── utils.ts             # Utility functions and types
│   └── assets/                  # Static resources
│       ├── image/               # Technology images and UI assets
│       └── audio/               # Sound effects
└── public/                      # Public files
```

## 🎨 Customization

Technologies are defined in the `src/lib/nodes/` directory, organized by columns. The main entry point is `all-nodes.ts`, which aggregates all nodes from individual column files.

To add, remove, or modify technologies, edit the corresponding column file or create a new one. Each node has the following properties:

- `id`: Unique identifier (use constants from `node-ids.ts`)
- `name`: Technology name
- `description`: Array of strings with the description
- `imageSrc`: Path to the technology image
- `position`: Position on screen (left, top)
- `cost`: Technology cost
- `dependsOn`: Prerequisite technology ID
- `children`: Array of child technology IDs
- `isRemovable`: Whether the technology can be removed (default: true)
- `isSelected`: Initial selection state (usually false, except for base technology)

### Example Node Structure

```typescript
{
  id: NODE_IDS.SOME_TECHNOLOGY,
  name: "Technology Name",
  description: ["Description line 1", "Description line 2"],
  imageSrc: "/assets/image/tech-image.png",
  position: { left: 320, top: 200 },
  cost: 100,
  dependsOn: NODE_IDS.PARENT_TECHNOLOGY,
  children: [NODE_IDS.CHILD_TECHNOLOGY_1, NODE_IDS.CHILD_TECHNOLOGY_2],
  isSelected: false,
}
```

## 🔧 Technical Details

### URL Encoding

The selected technologies are encoded in the URL using hexadecimal representation. The URL parameter `order` contains the selected node IDs in hexadecimal format, preserving the selection order.

### State Management

The application uses React hooks for state management:

- `useTechTree`: Manages node selection, dependencies, and order tracking
- `useDragging`: Handles drag-to-scroll functionality
- `useWindowDimensions`: Tracks window size for responsive layout adjustments

## 📝 License

This project is a fan project and is not officially affiliated with Numantian Games or They Are Billions.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.
