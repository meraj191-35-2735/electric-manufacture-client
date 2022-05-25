import React from "react";

const Review = ({ review }) => {
  const { name, des, stars, image, country } = review;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="flex justify-center items-center">
        <div className="avatar pt-5">
          <div className="w-20 mask mask-hexagon">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
          <p className="text-sm">{country}</p>
          <p className="text-sm">
            Stars: <span className="font-semibold"> {stars}</span>
          </p>
        </div>
        <p className="text-justify">{des}</p>
      </div>
    </div>
  );
};

export default Review;
