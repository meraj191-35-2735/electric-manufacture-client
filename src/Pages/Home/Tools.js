import React from "react";
import useTool from "../../hooks/useTool";
import Tool from "./Tool";
import { Link } from "react-router-dom";

const Tools = () => {
  const [tools] = useTool();

  return (
    <div>
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Tools
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {tools.length > 6
          ? tools
              .slice(0, 6)
              .map((tool) => <Tool tool={tool} key={tool._id}></Tool>)
          : tools.map((tool) => <Tool tool={tool} key={tool._id}></Tool>)}
      </div>
      {tools.length > 6 && (
        <div className="flex justify-end my-3">
          <Link to="/tools" className="text-primary font-bold px-3 mt-2">
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default Tools;
