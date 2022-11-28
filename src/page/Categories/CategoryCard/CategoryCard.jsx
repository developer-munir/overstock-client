import React, { useContext, useEffect, useState } from "react";

import { GrStatusGood } from "react-icons/gr";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import BookingModal from "../../BookingModal/BookingModal";
import { GiLoveHowl } from "react-icons/gi";
import { BsPaintBucket } from "react-icons/bs";
import toast from "react-hot-toast";
const CategoryCard = ({ product }) => {
  const [verifyed, setVerifyed] = useState(null);
  const { user } = useContext(AuthContext);
  const {
    Seller_name,
    year_of_purchase,
    buying_price,
    details,
    condition,
    location,
    number_of_seller,
    picture,
    resale_price,
    the_time_it_posted,
    title,
  } = product;
  useEffect(() => {
    fetch(`https://y-developer-munir.vercel.app/user/verifyed/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVerifyed(data?.isVerifyed);
      });
  }, [user?.email]);
  const handleWishlist = (picture, title, resale_price) => {
    const whishlist = {
      picture,
      title,
      resale_price,
      email: user?.email,
    };
    fetch("https://y-developer-munir.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(whishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("whishlist add successfully");
      })
      .catch((error) => console.log(error));
  };
  const handleReportedItem = () => {};
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
            {verifyed ? <GrStatusGood></GrStatusGood> : "unverifyed"}
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
          <h1>
            Years of use: {year_of_purchase ? year_of_purchase : "1 year+"}
          </h1>
          <h1>Post Date : {the_time_it_posted}</h1>
          <h1>Condition : {condition}</h1>
          <h1>Contact Number : {number_of_seller}</h1>
          <p className="font-bold">
            {details.length > 40 ? details.slice(0, 50) + "..." : details}
          </p>
        </div>
        <div className="card-actions grid mt-3">
          <BookingModal
            title={title}
            picture={picture}
            price={resale_price}
          ></BookingModal>
          <label
            htmlFor="booking-modal"
            className="text-color-my bg-[#03203C] py-3 px-6 font-semibold hover:bg-red-400 text-center"
          >
            Booking Now
          </label>
          <div className="grid grid-cols-2 my-2 w-1/2 gap-2">
            <span className="flex">
              <span
                onClick={() => handleWishlist(picture, title, resale_price)}
              >
                <GiLoveHowl
                  className="mr-3 cursor-pointer"
                  size={50}
                ></GiLoveHowl>
              </span>
              <span onClick={handleReportedItem}>
                <BsPaintBucket
                  size={50}
                  className="cursor-pointer"
                ></BsPaintBucket>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
