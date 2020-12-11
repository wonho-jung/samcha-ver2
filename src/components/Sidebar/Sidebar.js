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
      <div className="sidebar__Menu">
        <Link className="sidebar__Link" to="/menus">
          Lunch
        </Link>

        <Link className="sidebar__Link" to="/menus">
          Diner
        </Link>
        <Link className="sidebar__Link" to="/menus">
          Dessert&Drink
        </Link>
      </div>
      <div className="sidebar__Btn__Warp">
        <Link to="/Menu" className="sidebar__Route__Link">
          Book Now
        </Link>
      </div>
    </Container>
  );
}

export default Sidebar;
