import React from "react";
import "./Review.css";
function Review({ reviews }) {
  return (
    <div className="review">
      <h1 className="reviews__head">Reviews</h1>
      <div className="reviews__Wrapper">
        {reviews.map((data, index) => (
          <div className="reviews__Card" key={index}>
            <div className="review__Info">
              <h2 className="review__Title">{data.icon}</h2>
              <p className="review__Desc">{data.review}</p>
              <button className="review__Btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
