import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { GrStatusGood } from "react-icons/gr";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import BookingModal from "../../BookingModal/BookingModal";
import Spinner from "../../Shared/Spinner/Spinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["mybooking"],
    queryFn: async () => {
      const res = await fetch(
        `https://y-gamma-two.vercel.app/bookings/mybooking/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h1 className="text-3xl uppercase my-3 text-center border-b">
        My Orders
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {data?.map((order) => (
          <div className="w-full shadow-xl" key={order?._id}>
            <figure>
              <img src={order?.picture} alt="" className="h-[200px] w-full" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{order?.title}</h2>
              <h2 className="card-title">${order?.price}</h2>

              <div className="font-mono text-zinc-600"></div>
              <div className="card-actions mt-3">
                <label className="text-color-my bg-[#03203C] py-3 px-6 font-semibold hover:bg-red-400">
                  Pay Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
/*
 */
