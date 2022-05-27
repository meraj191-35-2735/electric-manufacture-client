import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddATool = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

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
          const tool = {
            name: data.name,
            description: data.description,
            availableQuantity: data.quantity,
            minimumOrder: data.minOrder,
            price: data.price,
            image: image,
          };
          console.log(tool);
          // send to your database
          fetch("https://quiet-inlet-26625.herokuapp.com/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tool),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                // toast.success("Review added successfully");
                navigate("/");
                reset();
              } else {
                toast.error("Failed to add this tool, try again!");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-primary underline">
        Add A Tool
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
                  message: "Tool Name is Required",
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
        {/* Description  */}
        <div className="form-control w-72">
          <label className="input-group mb-3">
            <span className="px-2">Description</span>
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
        {/* Quantity */}
        <div className="form-control w-72">
          <label className="input-group mb-3">
            <span className="px-[-4]">Quantity</span>
            <input
              type="number"
              name="quantity"
              className="input input-bordered "
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
              })}
            />
          </label>
          {errors.quantity?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.quantity.message}
            </span>
          )}
        </div>
        {/* Minimum Order */}
        <div className="form-control w-72">
          <label className="input-group mb-3">
            <span className="px-[-4]">Min. Order</span>
            <input
              type="number"
              name="minOrder"
              className="input input-bordered "
              {...register("minOrder", {
                required: {
                  value: true,
                  message: "Minimum Order is Required",
                },
              })}
            />
          </label>
          {errors.minOrder?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.minOrder.message}
            </span>
          )}
        </div>
        {/* description  */}
        <div className="form-control">
          <label className="input-group mb-3">
            <span className="px-4">Price</span>
            <input
              type="number"
              name="price"
              className="input input-bordered "
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
          </label>
          {errors.price?.type === "required" && (
            <span className="label-text-alt mb-2 text-red-600">
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Picture  */}
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

export default AddATool;
