import { useEffect, useState } from "react";
import { getSinglePlayer } from "../API";
import { useNavigate, useParams } from "react-router-dom";
import { deletePlayer } from "../API";

export default function SinglePlayer() {
  const navigate = useNavigate();

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

  async function deleteHandler(playerId) {
    await deletePlayer(playerId);

    navigate("/");
  }

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
      <button onClick={() => deleteHandler(id)}>Remove Player</button>
    </article>
  );
}
