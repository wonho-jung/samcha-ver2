import React from "react";
import "./Hero.css";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

function Hero({ isOpen, toggle }) {
  return (
    <div className="hero">
      <Nav toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="hero__Content">
        <div className="hero__Items">
          <h1 className="hero__H1">Greatest Korean food Ever</h1>
          <p className="hero__p">korean&Japanese restaurant</p>
          <button className="hero__Btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
