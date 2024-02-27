import { useState, useEffect } from "react";
import { getAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function updatePlayers() {
      try {
        const players = await getAllPlayers();
        console.log("players", players);
        setPlayers(players);
      } catch (err) {
        console.error(err);
      }
    }
    updatePlayers();
  }, []);

  function searchHandler(e) {
    console.log("e.target.value", e.target.value);
    setSearch(e.target.value);
  }

  let filteredPlayers = players;
  if (search !== "") {
    filteredPlayers = players.filter((player) => player.name.includes(search));
  }

  return (
    <main>
      <input name="search" value={search} onChange={searchHandler} />
      {filteredPlayers.map((player) => {
        return (
          <article key={player.id} className="player-card">
            <h2 onClick={() => navigate(`/players/${player.id}`)}>
              <img src={player.imageUrl} />
              {player.name}
            </h2>
          </article>
        );
      })}
    </main>
  );
}
