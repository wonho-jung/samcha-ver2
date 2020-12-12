import React from "react";

function Dinner({ Main, Side, Appetizer, Special }) {
  return (
    <div className="lunch">
      <div className="lunch__title">
        <h1>DINNER</h1>
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
          <h1>SPECIAL FOR TWO</h1>
        </div>
        {Special.map((item, index) => (
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
          <h1>Side</h1>
        </div>
        {Side.map((item, index) => (
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
        {Appetizer.map((item, index) => (
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

export default Dinner;
