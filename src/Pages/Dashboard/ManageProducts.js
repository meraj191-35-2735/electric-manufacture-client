import React from "react";
import useTool from "../../hooks/useTool";
import SingleTool from "./SingleTool";

const ManageProducts = () => {
  const [tools] = useTool();
  return (
    <div>
      <h1 className="text-center text-3xl text-primary font-bold my-4">
        Manage Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <SingleTool key={tool._id} tool={tool}></SingleTool>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
