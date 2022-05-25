import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Bookings = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://quiet-inlet-26625.herokuapp.com/booking?user=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
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
      <h2 className="text-2xl text-center py-3 font-bold">My Booking Tools</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{b.bookedItem}</td>
                <td>{b.quantity}</td>
                <td>{b.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
