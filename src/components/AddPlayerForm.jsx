import { useState } from "react";
import { addPlayer } from "../API";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();

    const playerObject = {
      name: name,
      breed: breed,
      imageUrl: image,
    };
    await addPlayer(playerObject);

    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Player</h1>
      <label>Name</label>
      <input
        name="name"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      ></input>
      <label>Breed</label>
      <input
        name="breed"
        value={breed}
        onChange={(evt) => setBreed(evt.target.value)}
      ></input>
      <label>Image URL</label>
      <input
        name="image"
        value={image}
        onChange={(evt) => setImage(evt.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
