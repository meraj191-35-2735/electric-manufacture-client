import { useEffect, useState } from "react";

const useTool = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://quiet-inlet-26625.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};

export default useTool;
