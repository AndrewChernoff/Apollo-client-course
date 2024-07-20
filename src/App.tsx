import { Route, Routes } from "react-router-dom";
import { CharactersList } from "./pages/CharactersList/CharactersList";
import { Character } from "./pages/Character/Character";
import { Search } from "./pages/Search/Search";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
