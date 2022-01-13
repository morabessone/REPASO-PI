import Cards from "./components/cards/CardsPlural";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/favoritos" element={<h1> Aca serian los favoritos</h1>} />
      </Routes>
    </div>
  );
}

export default App;
