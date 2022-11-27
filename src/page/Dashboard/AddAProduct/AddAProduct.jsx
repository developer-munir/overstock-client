import React from "react";

const AddAProduct = () => {
  // _id,
  // Seller_name,
  // Verified,
  // year_of_purchase,
  // Year_of_uses,
  // buying_price,
  // category_id,
  // category_name,
  // details,
  // condition,
  // location,
  // number_of_seller,
  // picture,
  // resale_price,
  // the_time_it_posted,
  // title,
  return (
    <div>
      <h1 className="text-3xl uppercase border-b text-center mb-4">
        Add a product
      </h1>
      <form>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">What is product name?</span>
            </label>
            <input
              type="text"
              placeholder="product name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Condition Type</span>
            </label>
            <select className="select select-info w-full">
              <option disabled selected>
                Select Condition
              </option>
              <option>excellent</option>
              <option>good</option>
              <option>fair</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="number"
              placeholder="mobile number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Older Price</span>
            </label>
            <input
              type="number"
              placeholder="older price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Categories</span>
            </label>
            <select className="select select-info w-full">
              <option disabled selected>
                Select Category
              </option>
              <option>Ultrabooks</option>
              <option>Netbooks</option>
              <option>Tablets</option>
              <option>Desktop Laptop</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Year of purchase</span>
            </label>
            <input
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
              type="number"
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
              type="text"
              placeholder="user name"
              name="sellername"
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Bio"
          ></textarea>
        </div>
        <input type="date" name="" className="input input-bordered mr-4" />
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
