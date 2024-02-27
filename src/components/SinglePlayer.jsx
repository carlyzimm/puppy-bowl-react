import { useEffect, useState } from "react";
import { getSinglePlayer } from "../API";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function updatePlayer() {
      try {
        const player = await getSinglePlayer(id);
        setPlayer(player);
      } catch (err) {
        console.error(err);
      }
    }
    updatePlayer();
  }, []);

  if (!player) {
    return <div>Loading...</div>;
  }
  return (
    <article key={player.id} className="player-card">
      <h2>
        <img src={player.imageUrl} />
        {player.name}
      </h2>
      <h3>{player.breed}</h3>
    </article>
  );
}
