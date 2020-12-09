import { faFont } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Hero.css";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hero">
      <Nav toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="hero__Content">
        <div className="hero__Items">
          <h1 className="hero__H1">
            Greatest <br />
            K-food Ever
          </h1>
          <p className="hero__p">korean&Japanese restaurant</p>
          <button className="hero__Btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
