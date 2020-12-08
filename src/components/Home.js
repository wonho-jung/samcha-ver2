import React from "react";
import "./Home.css";
import Nav from "./Nav";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Home() {
  return (
    <div className="home">
      <div className="home__title">
        <h1 className="home__h1">SAMCHA</h1>
      </div>

      <div className="home__scroll_down">
        <h5 className="home__h5">SCROLL DOWN</h5>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Home;
