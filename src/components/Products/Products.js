import React from "react";
import "./Products.css";
function Products({ heading, data }) {
  return (
    <div className="products">
      <h1 className="products__head">{heading}</h1>
      <div className="products__Wrapper">
        {data.map((item, index) => (
          <div className="products__Card" key={index}>
            <img src={item.img} alt={item.alt} className="products__img" />
            <div className="product__Info">
              <h2 className="product__Title">{item.alt}</h2>
              <p className="product__Desc">{item.desc}</p>
              <p className="product__Price">{item.price}</p>
              <button className="product__Btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
