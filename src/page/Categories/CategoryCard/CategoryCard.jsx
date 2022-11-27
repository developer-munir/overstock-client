import React, { useState } from "react";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";

import { GrStatusGood, GrStatusCritical } from "react-icons/gr";
import BookingModal from "../../BookingModal/BookingModal";
const CategoryCard = ({ product }) => {
  const {
    _id,
    Seller_name,
    Verified,
    year_of_purchase,
    Year_of_uses,
    buying_price,
    category_id,
    category_name,
    details,
    condition,
    location,
    number_of_seller,
    picture,
    resale_price,
    the_time_it_posted,
    title,
  } = product;
  return (
    <div className=" w-96 mx-auto shadow-xl">
      <figure>
        <img src={picture} alt="" className="h-[200px] w-full" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <h1 className="mr-3">{Seller_name}</h1>
          <small className="">
            <GrStatusGood></GrStatusGood>
          </small>
        </div>
        <small className="text-zinc-500">Location : {location}</small>
        <div className="flex items-center font-mono text-zinc-600">
          <small className="text-xl mr-6">${resale_price}</small>
          <small className="flex items-center right-16 ">
            <span className="text-3xl  text-red-600 line-through">
              ${buying_price}
            </span>
          </small>
        </div>
        <div className="font-mono text-zinc-600">
          <h1>Years of use: {Year_of_uses}</h1>
          <h1>Post Date : {the_time_it_posted}</h1>
        </div>
        <div className="card-actions mt-3">
          <BookingModal title={title} price={resale_price}></BookingModal>
          <label
            htmlFor="booking-modal"
            className="text-color-my bg-[#03203C] py-3 px-6 font-semibold hover:bg-red-400"
          >
            Booking Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
