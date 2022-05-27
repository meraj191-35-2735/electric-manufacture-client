import React from "react";
import useTool from "../../hooks/useTool";
import SingleTool from "./SingleTool";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const [tools, setTools] = useTool();
  const navigate = useNavigate();

  const handleRemoveTool = (tool) => {
    const indexOfTool = tools.indexOf(tool);
    tools.splice(indexOfTool, 1);
    const restTools = [...tools];
    setTools(restTools);
    fetch(`http://localhost:5000/tool/${tool._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(tool),
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        navigate("/");
      });
  };
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
              <SingleTool
                handleRemoveTool={handleRemoveTool}
                key={tool._id}
                tool={tool}
              ></SingleTool>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
