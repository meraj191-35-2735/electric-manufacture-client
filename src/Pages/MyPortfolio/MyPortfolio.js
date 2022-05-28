import React from "react";
import react from "../../assets/Skills/React-icon.svg.png";
import bootstrap from "../../assets/Skills/bootstrap-logo.svg";
import reactBootstrap from "../../assets/Skills/react-bootstrap.png";
import daisyui from "../../assets/Skills/daisy-ui.svg";
import tailwind from "../../assets/Skills/tailwind.png";
import firebase from "../../assets/Skills/firebase.png";
import nodeJs from "../../assets/Skills/node-js.png";
import mongoDB from "../../assets/Skills/mongodb.png";
import express from "../../assets/Skills/express.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-1">
        <div className="flex flex-col justify-center items-center py-16">
          <h4 className="text-xl font-bold my-3">Md. Shamsad Alam Meraj</h4>
          <p className="my-3">
            <span className="font-bold">Email:</span>{" "}
            shamsadalammeraj9@gmail.com
          </p>
          <p className="my-3">
            {" "}
            <span className="font-bold">University:</span> Daffodil
            International University
          </p>
          <p className="my-3">
            <span className="font-bold">Department:</span> Department of
            Software Engineering
          </p>
          <p>Recent Projects Links:</p>
          <li>
            <a
              className="hover:text-green-600 hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://sony-camera-meraj.netlify.app/"
            >
              Camera Review
            </a>
          </li>
          <li>
            <a
              className="hover:text-green-600 hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://kite-bd-holidays.web.app/"
            >
              Kite BD Holidays
            </a>
          </li>
          <li>
            <a
              className="hover:text-green-600 hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://car-stock-meraj.web.app/"
            >
              Car Stock
            </a>
          </li>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <h6 className="font-bold text-lg my-3"> Web Development Skills:</h6>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3">
            <div className="flex flex-col justify-center items-center p-5 rounded-lg bg-gray-100">
              <img className="w-24" src={react} alt="" />
              <p className="pt-3">ReactJS</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={bootstrap} alt="" />
              <p className="pt-3">Bootstrap</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={tailwind} alt="" />
              <p className="pt-3">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={reactBootstrap} alt="" />
              <p className="pt-3">React-Bootstrap</p>
            </div>

            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={daisyui} alt="" />
              <p className="pt-3">Daisy UI</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={firebase} alt="" />
              <p className="pt-3">Firebase</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={nodeJs} alt="" />
              <p className="pt-3">NodeJS</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={mongoDB} alt="" />
              <p className="pt-3">MongoDB</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24" src={express} alt="" />
              <p className="pt-3">ExpressJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
