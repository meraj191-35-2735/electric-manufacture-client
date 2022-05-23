import React from "react";

const Tool = ({ tool }) => {
  const { name, description, availableQuantity, minimumOrder, price, image } =
    tool;
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
        <div class="card-actions flex justify-center">
          <button class="btn btn-primary btn-sm mt-3 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
