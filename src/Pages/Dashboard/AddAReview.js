import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "a32c190178fb85425c64cab338bdde0e";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const review = {
            name: data.name,
            country: data.country,
            stars: data.star,
            des: data.description,
            image: image,
          };
          console.log(review);
          // send to your database
          fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Review added successfully");

                reset();
              } else {
                toast.error("Failed to add this review, try again!");
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-primary underline">
        Add A Review
      </h2>
      <form
        className="flex flex-col justify-center items-center mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name  */}
        <div className="form-control w-72">
          <label className="input-group mb-3">
            <span className="px-2">Name</span>
            <input
              type="text"
              name="name"
              className="input input-bordered "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </label>
          {errors.name?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>
        {/* Country  */}
        <div className="form-control w-72">
          <label className="input-group mb-3">
            <span className="px-2">Country</span>
            <input
              type="text"
              name="country"
              className="input input-bordered "
              {...register("country", {
                required: {
                  value: true,
                  message: "Country is Required",
                },
              })}
            />
          </label>
          {errors.country?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.country.message}
            </span>
          )}
        </div>
        {/* Stars  */}
        <div className="form-control w-72">
          <label className="input-group mb-3">
            <span className="px-[-4]">Star</span>
            <input
              type="text"
              name="star"
              className="input input-bordered "
              {...register("star", {
                required: {
                  value: true,
                  message: "Star is Required",
                },
                min: {
                  value: 1,
                  message: "Give review between 1 to 5 star!",
                },
                max: {
                  value: 5,
                  message: "Give review between 1 to 5 star!",
                },
              })}
            />
          </label>
          {errors.star?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.star.message}
            </span>
          )}
          {(errors.star?.type === "min" || errors.star?.type === "max") && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.star.message}
            </span>
          )}
        </div>
        {/* description  */}
        <div className="form-control">
          <label className="input-group mb-3">
            <span className="px-4">Description</span>
            <input
              type="text"
              name="description"
              className="input input-bordered "
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
          </label>
          {errors.description?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.description.message}
            </span>
          )}
        </div>
        {/* Others  */}
        <div className="form-control">
          <label className="input-group mb-3">
            <span className="ml-14">Image</span>
            <input
              type="file"
              name="image"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
          </label>
          {errors.image?.type === "required" && (
            <span className="label-text-alt mb-2 ml-16 text-red-600">
              {errors.image.message}
            </span>
          )}
        </div>
        <input
          className="btn btn-primary btn-sm mt-3 w-64 text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddAReview;
