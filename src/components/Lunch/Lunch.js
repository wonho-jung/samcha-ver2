import React from "react";
import "./Lunch.css";
function Lunch({ Main, Side, Appetizer }) {
  return (
    <div className="lunch">
      <div className="lunch__title">
        <h1>LUNCH MENU</h1>
      </div>
      <div className="lunch__menu">
        {Main.map((item, index) => (
          <div className="lunch__sigleMenu" key={index}>
            <img src={item.img} alt={item.img} />
            <div className="lunch__menuContent">
              <h4>
                {item.title}
                <span>{item.price}</span>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="lunch__title">
          <h1>Appetizer</h1>
        </div>
        {Appetizer.map((Appetizer, index) => (
          <div className="lunch__sigleMenu" key={index}>
            <img src={Appetizer.img} alt={Appetizer.img} />
            <div className="lunch__menuContent">
              <h4>
                {Appetizer.title}
                <span>{Appetizer.price}</span>
              </h4>
              <p>{Appetizer.desc}</p>
            </div>
          </div>
        ))}
        <div className="lunch__title">
          <h1>Side</h1>
        </div>
        {Side.map((Side, index) => (
          <div className="lunch__sigleMenu" key={index}>
            <img src={Side.img} alt={Side.img} />
            <div className="lunch__menuContent">
              <h4>
                {Side.title}
                <span>{Side.price}</span>
              </h4>
              <p>{Side.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lunch;
