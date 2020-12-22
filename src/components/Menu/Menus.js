import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Dinner from "../Dinner/Dinner";
import Drink from "..//Drink/Drink";
import Lunch from "../Lunch/Lunch";
import "./Menus.css";

const Menus = ({ isOpen, toggle, Main, Side, Appetizer, Special, Drinks }) => {
  let history = useHistory();
  console.log(history.location.pathname);
  const Item = styled.li`
    background-color: ${(props) => (props.active ? " #ffc500" : "#e31837")};
    color: ${(props) => (props.active ? "white" : "black")};
  `;
  const [loading, setLoading] = useState(true);
  const types = ["Lunch", "Dinner", "Drink"];
  const selected = () => {
    console.log("you click!");
  };

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
        <Item
          onClick={selected}
          active={history.location.pathname === "/menus/lunch"}
          className="menus__li"
        >
          <Link to="/menus/lunch">Lunch</Link>
        </Item>

        <Item
          onClick={selected}
          className="menus__li"
          active={history.location.pathname === "/menus/dinner"}
        >
          <Link to="/menus/dinner">Dinner</Link>
        </Item>

        <Item
          onClick={selected}
          className="menus__li"
          active={history.location.pathname === "/menus/drink"}
        >
          <Link to="/menus/drink">Drink </Link>
        </Item>
      </ul>
      <Route path="/menus/lunch">
        <Lunch Main={Main} Side={Side} Appetizer={Appetizer} />
      </Route>
      <Route path="/menus/dinner">
        <Dinner
          Main={Main}
          Side={Side}
          Appetizer={Appetizer}
          Special={Special}
        />
      </Route>
      <Route path="/menus/drink">
        <Drink Drinks={Drinks} />
      </Route>
    </>
  );
};

export default Menus;
