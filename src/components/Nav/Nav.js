import React from "react";
import { NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

import "./Nav.css";
function Nav({ toggle }) {
  return (
    <nav>
      <NavLink className="nav__Link" to="/">
        SAMCHA
      </NavLink>
      <div className="nav__Icon" onClick={toggle}>
        <p>Menu</p>
        <GiKnifeFork className="nav__Fork" />
      </div>
    </nav>
  );
}

export default Nav;
