import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechTree from "./components/tech-tree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TechTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
