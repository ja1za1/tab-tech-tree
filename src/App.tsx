import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechTree from "./components/tech-tree";
import { AudioProvider } from "./context/audio-content";
import { NodeProvider } from "./context/node-content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AudioProvider>
              <NodeProvider>
                <TechTree />
              </NodeProvider>
            </AudioProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
