import React from "react";

const Review = ({ review }) => {
  const { name, des, image, country } = review;
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div className="flex justify-center items-center">
        <div class="avatar pt-5">
          <div class="w-20 mask mask-hexagon">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div class="card-body ">
        <h2 class="card-title">{name}</h2>
        <p className="text-xs">{country}</p>
        <p className="text-justify">{des}</p>
      </div>
    </div>
  );
};

export default Review;
