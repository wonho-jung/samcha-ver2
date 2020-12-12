import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./About.css";

function About({ isOpen, toggle }) {
  return (
    <>
      <div className="about">
        <Nav toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="about__Content">
          <div className="about__Item">
            <h1 className="about__H1">About Us</h1>
          </div>
        </div>
      </div>
      <div about__us>
        <h1>This is going to be content</h1>
      </div>
    </>
  );
}

export default About;
