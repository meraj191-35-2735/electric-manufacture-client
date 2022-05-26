import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    fetch(`https://quiet-inlet-26625.herokuapp.com/user/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          navigate("/dashboard/myProfile");
          reset();
        } else {
          alert("Failed to edit profile, try again!");
        }
      });
  };
  return (
    <div>
      <h3 className="my-2 font-bold text-center text-primary">
        Update Your Profile
      </h3>
      <form
        className="flex justify-center items-center flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Education  */}
        <div>
          <label class="label">
            <span class="label-text font-bold">Education</span>
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            name="education"
            placeholder="Education"
            {...register("education", {
              required: {
                value: true,
                message: "University Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.education.message}
              </span>
            )}
          </label>
        </div>
        {/* Phone  */}
        <div>
          <label class="label">
            <span class="label-text font-bold">Phone</span>
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            name="Phone"
            placeholder="Phone"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone Number is Required",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>
        {/* Address  */}
        <div>
          <label class="label">
            <span class="label-text font-bold">Address</span>
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            name="address"
            placeholder="Address:"
            {...register("address", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
          />
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.address.message}
              </span>
            )}
          </label>
        </div>
        {/* Linked In  */}
        <div>
          <label class="label">
            <span class="label-text font-bold">LinkedIn Link</span>
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            name="linkedin"
            placeholder="LinkedIn"
            {...register("linkedin", {
              required: {
                value: true,
                message: "LinkedIn Link is Required",
              },
            })}
          />
          <label className="label">
            {errors.linkedin?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>
        <input type="submit" className="btn btn-primary text-white my-3" />
      </form>
    </div>
  );
};

export default UpdateProfile;
