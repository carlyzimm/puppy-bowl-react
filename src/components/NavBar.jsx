import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <section>Puppy Bowl</section>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/players">All Players</NavLink>
        <NavLink to="/singleplayer">Single Player</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
