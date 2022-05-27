import React from "react";
import notFound from "../../assets/NotFound/notFound.jpg";
import Footer from "../Shared/Footer";

const NotFound = () => {
  return (
    <div>
      <img src={notFound} alt="" />
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
