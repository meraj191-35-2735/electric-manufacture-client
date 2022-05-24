import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    description,
    availableQuantity,
    minimumOrder,
    price,
    image,
  } = tool;
  const navigate = useNavigate();
  const handleBookNow = (id) => {
    navigate(`/bookNow/${id}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="pt-5 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-primary">In Stock</div>
        </h2>
        <p>
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">
            Available: {availableQuantity}
          </div>
          <div className="badge badge-outline">Min. Order: {minimumOrder}</div>
        </div>
        <div className="card-actions flex justify-between">
          <p className="text-3xl py-2">Price: {price}$</p>
          <button
            onClick={() => handleBookNow(_id)}
            className="btn btn-primary btn-sm mt-3 text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
