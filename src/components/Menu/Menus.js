import React from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./Menus.css";

const Menus = ({ isOpen, toggle }) => {
  return (
    <>
      <div className="menus">
        <Nav toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="menus__Content">
          <div className="menus__Item">
            <h1 className="menus__H1">Menu</h1>
          </div>
        </div>
      </div>
      <ul className="menus__Ul">
        <Link to="/menus/lunch">
          <li className="menus__li">Lunch</li>
        </Link>

        <Link to="/menus/dinner">
          <li className="menus__li">Dinner</li>
        </Link>
        <Link to="/menus/drink">
          <li className="menus__li">Drink</li>
        </Link>
      </ul>
    </>
  );
};

export default Menus;
