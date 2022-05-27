import { faTags, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Features = () => {
  return (
    <div>
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Opportunities
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2">
        <div className="grid grid-cols-2 gap-2 my-3 lg:my-0 py-10 border-2 border-primary-focus bg-gray-200  px-5 rounded-lg">
          <div className="flex justify-center  bg-white rounded-full items-center text-secondary">
            <FontAwesomeIcon
              className="text-7xl  hover:text-5xl  px-5 bg-transparent"
              icon={faTruckFast}
            />
          </div>
          <div className="px-2">
            <h3 className="text-xl font-serif font-bold">SHIPPING WORLDWIDE</h3>
            <p className="text-justify">
              Your freight and small parcel shipments make an important
              statement about your company.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 my-3 lg:my-0 py-10 border-2 border-primary-focus bg-gray-200  px-5 rounded-lg">
          <div className="flex justify-center bg-white rounded-full items-center text-secondary">
            <FontAwesomeIcon
              className="text-7xl  hover:text-5xl  px-5 bg-transparent"
              icon={faUser}
            />
          </div>
          <div className="px-2">
            <h3 className="text-xl  font-serif font-bold">
              PARTNERSHIP PROGRAM
            </h3>
            <p className="text-justify">
              A vendor offer a consultant liaison program, which provide product
              training and dedicated support.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 my-3 lg:my-0 py-10 border-2 border-primary-focus bg-gray-200 px-5 rounded-lg">
          <div className="flex justify-center bg-white rounded-full items-center text-secondary">
            <FontAwesomeIcon
              className="text-7xl  hover:text-5xl  px-5 bg-transparent"
              icon={faTags}
            />
          </div>
          <div className="px-2 ">
            <h3 className="text-xl font-serif font-bold ">DISCOUNTS & SALE</h3>
            <p className="text-justify">
              The term 'sales discount' is a catch-all term for any reduction in
              price a seller offers for its product or service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
