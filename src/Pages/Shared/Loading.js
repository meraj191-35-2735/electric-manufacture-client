import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-primary border-dotted rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
