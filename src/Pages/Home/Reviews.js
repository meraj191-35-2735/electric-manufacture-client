import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://quiet-inlet-26625.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews > 6
          ? reviews
              .slice(0, 6)
              .map((review) => (
                <Review key={review._id} review={review}></Review>
              ))
              .reverse()
          : reviews
              .map((review) => (
                <Review key={review._id} review={review}></Review>
              ))
              .reverse()}
      </div>
    </div>
  );
};

export default Reviews;
