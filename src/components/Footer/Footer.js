import React from "react";
import "./Footer.css";
import skip from "../../assets/skip.png";
import ubereat from "../../assets/uber-eat-logo.png";
import Fantaun from "../../assets/Fantaun.png";
import doordash from "../../assets/doordash.jpg";
import { GiKnifeFork } from "react-icons/gi";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__logoImg">
          <div className="footer__img">
            <img src={skip} alt="" />
          </div>
          <div className="footer__img">
            <img src={ubereat} alt="" />
          </div>
          <div className="footer__img">
            <img src={Fantaun} alt="" />
          </div>
          <div className="footer__img">
            <img src={doordash} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__container">
          <div className="bottom__box">
            <GiKnifeFork className="samcha__logo" />
          </div>
          <div className="bottom__box">
            <h2>Contact Us</h2>
            <ul className="bottom__content">
              <li>2176 A Saint-Catherine St, Montreal, Quebec H3H 1M6</li>
              <li>514-932-7565</li>
              <li>
                <FacebookIcon fontSize="large" style={{ marginRight: "5px" }} />
                <InstagramIcon fontSize="large" />
              </li>
            </ul>
          </div>
          <div className="bottom__box ">
            <h2>Hours</h2>
            <ul className="bottom__content">
              <li>Lunch</li>
              <li>12pm - 4pm</li>
              <li>Dinner</li>
              <li>5pm - 11pm</li>
            </ul>
          </div>

          <div className="bottom__box">
            <h2>Menu</h2>
            <ul className="bottom__content">
              <Link to="/">
                <li className="link">Home</li>
              </Link>
              <Link to="/about">
                <li className="link">About</li>
              </Link>
              <Link to="/menus">
                <li className="link">Menus</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>

    // <div className="Footer">
    //   <p>
    //     <a href="https://www.freepik.com/photos/food">
    //       Food photo created by timolina - www.freepik.com
    //     </a>
    //     http://www.mkhealth.co.kr/news/articleView.html?idxno=44609
    //   </p>
    //   <h1>contacts</h1>
    // </div>
  );
}

export default Footer;
