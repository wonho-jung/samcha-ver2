import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Menus from "./Menus";
import "./Nav.css";

function Nav() {
  const dot = document.getElementsByClassName("sibal");
  const showName = (e) => {
    e.preventDefault();
    e.target.classList.add("sibal");
  };
  return (
    <div className="nav">
      <ul>
        <li onClick={showName} className="sibal">
          <Link to="/">
            <span>HOME</span>
          </Link>
        </li>
        <li onClick={showName}>
          <Link to="/about">
            <span>ABOUT</span>
          </Link>
        </li>
        <li onClick={showName}>
          <Link to="/">
            <span>MENUS</span>
          </Link>
        </li>
        <li onClick={showName}>
          <Link to="/">
            <span>PICTURES</span>
          </Link>
        </li>
        <li onClick={showName}>
          <Link to="/">
            <span>TEAMS</span>
          </Link>
        </li>
        <li onClick={showName}>
          <Link to="/">
            <span>CONTACTS</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
