import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Map from "./Map";
import "./About.css";
import "leaflet/dist/leaflet.css";
import Review from "./Review";
import Instagram from "./Instagram";

function About({ isOpen, toggle, reviews }) {
  const position = [51.505, -0.09];

  return (
    <div className="bg">
      <div className="about">
        <Nav toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="about__Content">
          <div className="about__Item">
            <h1 className="about__H1">About </h1>
          </div>
        </div>
      </div>
      <div className="about__us">
        <div className="about__video">
          <div className="about__left">
            <h1>About us</h1>
            ​Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Sed posuere consectetur est at lobortis. Cras,
            dapibus ac facilisis Sed posuere consectetur est at lobortis. Cras,
            dapibus ac facilisis in, meet head chef - Donte Owens. Cras, dapibus
            ac facilisis in, meet head chef - Donte Owens.
          </div>
          <div className="about__right">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffoodfestmtl%2Fvideos%2F747749062060839%2F&show_text=0&width=560"
              style={{
                width: "100%",
                height: "170px",
                style: "border:none;overflow:hidden",
                scrolling: "no",
                frameborder: "0",
                allowTransparency: "true",
                allowFullScreen: "true",
              }}
            ></iframe>
          </div>
        </div>
        <div className="about__map">
          <Map />
        </div>
        <div className="about__reviews">
          <Review reviews={reviews} />
        </div>
        <div className="about__instagrams">
          <Instagram />
        </div>
      </div>
    </div>
  );
}

export default About;
