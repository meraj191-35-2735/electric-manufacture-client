import React from "react";
import { Link } from "react-router-dom";
import bannerBg from "../../assets/Banner/banner-bg1.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-full"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content py-16">
        <div className="max-w-md">
          <h5 className="py-12">ELECTRIX MANUFACTURING</h5>
          <h1 className="mb-5 text-5xl font-bold pb-12 text-white">
            <span className="text-primary">COMMITED</span> <br /> TO SUPER
            QUALITY
          </h1>
          <p className="mb-5 text-white">
            We won Many Industrial Awards and Got Many Certificates Since
            2001-2022
          </p>
          <Link to="/tools" className="btn btn-primary text-white my-5">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
