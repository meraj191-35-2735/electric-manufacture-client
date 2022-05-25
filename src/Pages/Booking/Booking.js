import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Booking = () => {
  const [user] = useAuthState(auth);
  const { toolId } = useParams();
  const [bookingTool, setBookingTool] = useState([]);
  const navigate = useNavigate();
  const [quantityError, setQuantityError] = useState("");

  useEffect(() => {
    fetch(`https://quiet-inlet-26625.herokuapp.com/tool/${toolId}`)
      .then((res) => res.json())
      .then((data) => setBookingTool(data));
  }, [toolId]);

  const handleError = () => {
    const quantity = document.getElementById("inputQuantity").value;
    if (bookingTool.minimumOrder > quantity) {
      setQuantityError(`Book at least ${bookingTool.minimumOrder} !`);
    } else if (quantity > bookingTool.availableQuantity) {
      setQuantityError(
        `You can book maximum ${bookingTool.availableQuantity}!`
      );
    } else {
      setQuantityError(null);
    }
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      user: user.email,
      userName: user.displayName,
      phone: event.target.phone.value,
      bookedItem: bookingTool.name,
      quantity: event.target.quantity.value,
    };
    fetch("https://quiet-inlet-26625.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Successfully Booked The Tool!`);
          navigate("/");
        } else {
          toast.error(`Something Went Wrong, Please Try Again!`);
        }
      });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="pt-5 rounded-lg"
            src={bookingTool.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookingTool.name}
            <div className="badge badge-primary">In Stock</div>
          </h2>
          <p>{bookingTool.description}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline text-lg">
              Available Quantity: {bookingTool.availableQuantity}
            </div>
            <div className="badge badge-outline text-lg">
              Minimum Order: {bookingTool.minimumOrder}
            </div>
          </div>

          <p className="text-3xl py-2 text-center">
            Price/Tool(Price Per Tool): {bookingTool.price}$
          </p>
          <div className="form-control mx-auto  w-full max-w-xs">
            <h3 className="font-bold text-lg py-3">
              Booking for:{" "}
              <span className="text-accent">{bookingTool.name}</span>
            </h3>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered  w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text text-secondary font-bold">
                  Enter Quantity
                </span>
              </label>
              <input
                onChange={handleError}
                type="text"
                id="inputQuantity"
                name="quantity"
                defaultValue={bookingTool.minimumOrder}
                contentEditable="true"
                placeholder="Quantity"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              {
                <p className="text-red-600 font-bold">
                  <small>{quantityError}</small>
                </p>
              }
              {quantityError ? (
                <input
                  disabled
                  id="submitButton"
                  type="submit"
                  value="Book"
                  className="btn btn-primary text-white w-full max-w-xs"
                />
              ) : (
                <input
                  id="submitButton"
                  type="submit"
                  value="Book"
                  className="btn btn-primary  text-white w-full max-w-xs"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
