import React from "react";

const SingleTool = ({ tool }) => {
  const { name, image } = tool;
  return (
    <tr>
      <td>
        <img className="lg:w-20 lg:h-16" src={image} alt="" />
      </td>
      <td>{name}</td>

      <td>
        <button className="btn btn-xs">Delete Product</button>
      </td>
    </tr>
  );
};

export default SingleTool;
