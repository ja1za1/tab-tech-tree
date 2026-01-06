import TechNode from "./components/tech-node";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-[#041200] relative">
      <img
        className=" min-h-screen py-3 max-h-screen min-w-full"
        src="/src/assets/tech-tree-board.png"
        alt=""
      />
      <TechNode
        cost={0}
        name="Steam Tecnology"
        imageSrc="/src/assets/pocao.png"
        position={{ left: 24, top: 100 }}
        description="Tecnologia inicial"
        isRemovable={false}
      />

      <TechNode
        cost={100}
        name="Bearings and Pulleys "
        imageSrc="/src/assets/trigo.png"
        position={{ left: 124, top: 60 }}
        description="Soldados"
      />

      <TechNode
        cost={120}
        name="Assault Rifle"
        imageSrc="/src/assets/soldado.png"
        position={{ left: 124, top: 80 }}
        description="Soldados"
      />

      <TechNode
        cost={100}
        name="Mercenaries I"
        imageSrc="/src/assets/pocao.png"
        position={{ left: 124, top: 116 }}
        description="Adicionar 1 soldado no inicio do jogo"
      />

      <TechNode
        cost={100}
        name="High-Rise Defenses I"
        imageSrc="/src/assets/torre-madeira.png"
        position={{ left: 124, bottom: 80 }}
        description="Nova estrutura. Torre de madeira"
      />

      <TechNode
        cost={100}
        name="Logistics"
        imageSrc="/src/assets/logistics.png"
        position={{ left: 124, bottom: 52 }}
        description="Mais recursos"
      />

      {/* <span className="border border-red-500 absolute left-124 top-60">
        aaa
      </span> */}
    </div>
  );
}

export default App;
