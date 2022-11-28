import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const addAProduct = (data) => {
    const img = data?.image[0];
    const formData = new FormData();
    formData.append("image", img);
    fetch(
      `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_ImgBB_Key}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((img) => {
        const image = img.data?.image?.url;
        const categories = {
          productName: data?.productname,
          Seller_name: user?.displayName,
          category_name: data?.category,
          condition: data?.condition,
          title: data?.title,
          details: data?.description,
          buying_price: data?.price,
          year_of_purchase: data?.purchaseyear,
          resale_price: data?.olderprice,
          the_time_it_posted: data?.date,
          picture: image,
          location: data?.location,
          number: data?.number,
        };
        fetch("https://y-gamma-two.vercel.app/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(categories),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.acknowledged) {
              toast.success("Product add successfully");
              navigate("/dashboard/myproduct");
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-3xl uppercase border-b text-center mb-4">
        Add a product
      </h1>
      <form onSubmit={handleSubmit(addAProduct)}>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">What is product name?</span>
            </label>
            <input
              {...register("productname")}
              type="text"
              name="productname"
              placeholder="product name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Condition Type</span>
            </label>
            <select
              className="select select-info w-full"
              {...register("condition")}
            >
              <option disabled selected>
                Select Condition
              </option>
              <option value="excellent">excellent</option>
              <option value="good">good</option>
              <option value="fair">fair</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              {...register("number")}
              type="number"
              name="number"
              placeholder="mobile number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Older Price</span>
            </label>
            <input
              {...register("olderprice")}
              type="number"
              name="olderprice"
              placeholder="older price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Categories</span>
            </label>
            <select
              className="select select-info w-full"
              {...register("category")}
            >
              <option disabled selected>
                Select Category
              </option>
              <option value="Ultrabooks">Ultrabooks</option>
              <option value="Netbooks">Netbooks</option>
              <option value="Tablets">Tablets</option>
              <option value="Desktop laptop">Desktop Laptop</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Year of purchase</span>
            </label>
            <input
              {...register("purchaseyear")}
              type="text"
              placeholder="Year of purchase"
              name="purchaseyear"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Produt Title</span>
            </label>
            <input
              {...register("title")}
              type="text"
              placeholder="title"
              name="title"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              {...register("sellername")}
              type="text"
              placeholder={user?.displayName}
              readOnly
              name="sellername"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Peak Date</span>
            </label>
            <input
              {...register("date")}
              type="date"
              name="date"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              {...register("image", {
                required: "photo is required",
              })}
              name="image"
              type="file"
              className="file-input file-input-bordered file-input-info w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Location </span>
            </label>
            <input
              {...register("location", {
                required: "location is required",
              })}
              name="location"
              type="text"
              placeholder="location"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Write Descriptions</span>
          </label>
          <textarea
            {...register("description")}
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Bio"
          ></textarea>
        </div>
        <button
          type="submit"
          className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400 mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddAProduct;
