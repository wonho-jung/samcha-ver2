import React from "react";

function Review({ reviews }) {
  return (
    <div className="products">
      <h1 className="products__head">Reviews</h1>
      <div className="products__Wrapper">
        {reviews.map((data, index) => (
          <div className="products__Card" key={index}>
            <div className="product__Info">
              <h2 className="product__Title">{data.icon}</h2>
              <p className="product__Desc">{data.review}</p>
              <button className="product__Btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
