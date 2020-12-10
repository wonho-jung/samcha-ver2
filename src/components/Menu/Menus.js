import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

import "./Menus.css";
function Menus({ isOpen, toggle }) {
  return (
    <div className="menus">
      <Nav toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="menus__Content">
        <div className="menus__Item">
          <h1 className="menus__H1">Menu</h1>
        </div>
      </div>
      <div className="menus__Btns">
        <button className="menus__Btn">Lunch</button>
        <button className="menus__Btn">Dinner</button>
        <button className="menus__Btn">Drink</button>
      </div>
    </div>
  );
}

export default Menus;
