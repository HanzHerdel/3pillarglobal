import { Main } from "./app/components/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetails } from "./app/components/PokemonDetails";
function App() {
  return (
    <div className="App" >

        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Main />} />
             <Route path="/:pokemon" element={<PokemonDetails />} /> 
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
