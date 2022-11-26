import React from "react";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";

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
        <img src={picture} alt="" className="" />
      </figure>
      <div className="card-body bg-[#CAD5E2] text-zinc-800">
        <div className="flex items-center">
          <h1 className="text-lg mr-5">{Seller_name}</h1>
          <small className="text-[11px]">{Verified}</small>
        </div>
        <h2 className="card-title">{title}</h2>
        <small>Location : {location}</small>
        <div className="flex items-center ">
          <small className="text-xl mr-6">${resale_price}</small>
          <small className="flex items-center right-16 ">
            <span className="text-3xl font-semibold  text-red-600 line-through">
              ${buying_price}
            </span>
          </small>
        </div>
        <div className="font-mono">
          <h1>Used Time: {Year_of_uses}</h1>
          <h1>Post Time : {the_time_it_posted} P.M</h1>
        </div>
        <div className="card-actions">
          <PrimaryBtn>Book Now</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
