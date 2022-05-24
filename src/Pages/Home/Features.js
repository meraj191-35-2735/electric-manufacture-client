import { faTags, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Features = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2">
      <div className="flex py-10  px-5 rounded-lg">
        <div className="flex justify-center items-center text-secondary">
          <FontAwesomeIcon
            className="text-8xl px-5 bg-transparent"
            icon={faTruckFast}
          />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold">SHIPPING WORLDWIDE</h3>
          <p className="text-justify">
            Your freight and small parcel shipments make an important statement
            about your company.
          </p>
        </div>
      </div>
      <div className="flex py-10  px-5 rounded-lg">
        <div className="flex justify-center items-center text-secondary">
          <FontAwesomeIcon
            className="text-8xl px-5 bg-transparent"
            icon={faUser}
          />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold">PARTNERSHIP PROGRAM</h3>
          <p className="text-justify">
            A vendor offer a consultant liaison program, which provide product
            training and dedicated support.
          </p>
        </div>
      </div>
      <div className="flex py-10 px-5 rounded-lg">
        <div className="flex justify-center items-center text-secondary">
          <FontAwesomeIcon
            className="text-8xl px-5 bg-transparent"
            icon={faTags}
          />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold">DISCOUNTS & SALE</h3>
          <p className="text-justify">
            The term 'sales discount' is a catch-all term for any reduction in
            price a seller offers for its product or service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
