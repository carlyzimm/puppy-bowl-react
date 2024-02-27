import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Navbar from "./components/NavBar";
import NewPlayerForm from "./components/AddPlayerForm";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/add" element={<NewPlayerForm />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
