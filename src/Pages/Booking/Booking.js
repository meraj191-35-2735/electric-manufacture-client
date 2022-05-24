import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Booking = () => {
  const { toolId } = useParams();
  const [bookingTool, setBookingTool] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000?_id=${toolId}`)
      .then((res) => res.json)
      .then((data) => console.log(data));
  }, [toolId]);
  return (
    <div>
      <h1>This is Book Now Page</h1>
    </div>
  );
};

export default Booking;
