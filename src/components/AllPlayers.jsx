import { useState, useEffect } from "react";
import axios from "axios";
import Player from "./SinglePlayer";

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const { data } = await axios.get(
        "https://fsa-puppy-bowl.herokuapp.com/api/carlyzimm/players"
      );

      setPlayers(data);
    }

    fetchPlayers();
  }, []);

  console.log(players);

  if (players.length === 0) {
    return <h1>Loading players...</h1>;
  }

  return (
    <section className="all-players">
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </section>
  );
}

export default AllPlayers;
