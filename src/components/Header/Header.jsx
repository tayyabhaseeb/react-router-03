import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/Host">Host</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Vans">Vans</NavLink>
      </nav>
    </header>
  );
}
