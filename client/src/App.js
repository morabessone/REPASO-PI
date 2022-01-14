import Cards from "./components/cards/CardsPlural";
import { Route, Routes } from "react-router-dom";
import Create from "./components/create/Create";

function App() {
  return (
    <div>
      <h1>Esto podria ser la nav bar</h1>
      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/favoritos" element={<h1> Aca serian los favoritos</h1>} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
