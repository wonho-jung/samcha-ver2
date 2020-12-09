import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { Container } from "./SidebarEl";
function Sidebar({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <div className="sidebar__Icon" onClick={toggle}>
        <FaTimes className="sidebar__FaTimes" />
      </div>
      <div sidebar__menu>
        <Link className="sidebar__Link" to="/">
          Appetizer
        </Link>
        <Link className="sidebar__Link" to="/">
          Munchies
        </Link>
        <Link className="sidebar__Link" to="/">
          Main Meal
        </Link>
        <Link className="sidebar__Link" to="/">
          Dessert
        </Link>
        <Link className="sidebar__Link" to="/">
          Drink
        </Link>
      </div>
      <div className="sidebar__Btn__Warp">
        <Link to="/" className="sidebar__Route__Link">
          Order Now
        </Link>
      </div>
    </Container>
  );
}

export default Sidebar;
