import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
  const { name, des, stars, image, country } = review;
  return (
    <div className="card  bg-gray-200 shadow-xl">
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

          <ReactStars
            isHalf={true}
            value={stars} // onChange={ratingChanged}
            edit={false}
            size={24}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
        </div>
        <p className="text-justify">{des}</p>
      </div>
    </div>
  );
};

export default Review;
