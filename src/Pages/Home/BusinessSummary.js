import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLightbulb,
  faPeopleGroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Why You Can Trust!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faGlobe} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-center text-4xl font-bold ">80+</h2>
            <p>Countries</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faLightbulb} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-center text-4xl font-bold ">1000+</h2>
            <p>Products</p>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-center text-4xl font-bold ">10,000+</h2>
            <p>Customers</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <p className="text-4xl text-secondary">
              <FontAwesomeIcon icon={faThumbsUp} />
            </p>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-center text-4xl font-bold ">520+</h2>
            <p>Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
