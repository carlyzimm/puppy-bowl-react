import axios from "axios";

function Player({ player }) {
  return (
    <div key={player.id} className="player-card">
      <h3>{player.name}</h3>
    </div>
  );
}

export default Player;
