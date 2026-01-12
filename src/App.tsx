import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechTree from "./components/tech-tree";
import { AudioProvider } from "./context/audio-content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AudioProvider>
              <TechTree />
            </AudioProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
