import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const ManageOrder = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    if (user) {
      fetch("https://quiet-inlet-26625.herokuapp.com/booking", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setBookings(data);
        });
    }
  }, [user, navigate]);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-primary underline">
        Manage Orders
      </h2>
      <div className="overflow-x-auto my-3">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Username</th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.userName}</td>
                <td>{booking.bookedItem}</td>
                <td>{booking.quantity}</td>
                <td>
                  <button className="btn btn-xs btn-success">Deliver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
