import React from "react";
import useTool from "../../hooks/useTool";
import Tool from "./Tool";

const Tools = () => {
  const [tools] = useTool();

  return (
    <div>
      <h1 className="text-center text-5xl text-primary my-10 font-serif">
        Tools
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Tool tool={tool} key={tool._id}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
