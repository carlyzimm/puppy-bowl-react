import { useState, useEffect } from "react";
import { getAllPlayers } from "../API";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

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

  return (
    <main>
      {players.map((player) => {
        return (
          <article key={player.id} className="player-card">
            <h2>
              <img src={player.imageUrl} />
              {player.name}
            </h2>
          </article>
        );
      })}
    </main>
  );
}
