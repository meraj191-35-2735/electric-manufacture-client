import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const Tool = ({ tool }) => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="card  shadow-xl bg-gray-200">
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
          {admin ? (
            <button
              onClick={() => handleBookNow(_id)}
              disabled
              className="btn btn-primary btn-sm mt-3 text-white"
            >
              Book Now
            </button>
          ) : (
            <button
              onClick={() => handleBookNow(_id)}
              className="btn btn-primary btn-sm mt-3 text-white"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tool;
