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
      </div>
    </div>
  );
}

export default Lunch;
