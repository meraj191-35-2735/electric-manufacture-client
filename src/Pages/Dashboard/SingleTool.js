import React from "react";

const SingleTool = ({ tool, handleRemoveTool }) => {
  const { name, image } = tool;

  return (
    <tr>
      <td>
        <img className="lg:w-20 lg:h-16" src={image} alt="" />
      </td>
      <td>{name}</td>

      <td>
        <button onClick={() => handleRemoveTool(tool)} className="btn btn-xs">
          Delete Product
        </button>
      </td>
    </tr>
  );
};

export default SingleTool;
