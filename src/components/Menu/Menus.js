import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Dinner from "../Dinner/Dinner";
import Drink from "..//Drink/Drink";
import Lunch from "../Lunch/Lunch";
import "./Menus.css";
import styled from "styled-components";

const Menus = ({ isOpen, toggle, Main, Side, Appetizer, Special, Drinks }) => {
  const Item = styled.li`
    ${({ active }) =>
      active &&
      `
background-color: #e31837;
`}
  `;

  function OpenMenu() {
    switch (active) {
      case "Dinner":
        return (
          <div>
            <Dinner
              Main={Main}
              Side={Side}
              Appetizer={Appetizer}
              Special={Special}
            />
          </div>
        );
      case "Drink":
        return (
          <div>
            <Drink Drinks={Drinks} />
          </div>
        );
      default:
        return (
          <div>
            <Lunch Main={Main} Side={Side} Appetizer={Appetizer} />
          </div>
        );
    }
  }
  const types = ["Lunch", "Dinner", "Drink"];

  const [active, setActive] = useState(types[0]);

  return (
    <div className="bg">
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
        <Item
          active={active === types[0]}
          onClick={() => setActive(types[0])}
          className="menus__li"
        >
          <Link to="/menus/lunch">Lunch</Link>
        </Item>

        <Item
          active={active === types[1]}
          onClick={() => setActive(types[1])}
          className="menus__li"
        >
          <Link to="/menus/dinner">Dinner</Link>
        </Item>

        <Item
          active={active === types[2]}
          onClick={() => setActive(types[2])}
          className="menus__li"
        >
          <Link to="/menus/drink">Drink </Link>
        </Item>
      </ul>
      <OpenMenu />
    </div>
  );
};

export default Menus;
