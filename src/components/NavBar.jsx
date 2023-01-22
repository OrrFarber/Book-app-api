import "../App";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">
          <h1>Book App</h1>
        </NavLink>
      </div>
      <NavLink to="/favorites">
        <h3>Your favorites</h3>
      </NavLink>
    </div>
  );
}
