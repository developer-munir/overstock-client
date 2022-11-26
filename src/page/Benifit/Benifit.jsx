import React from "react";
import { GrStatusGood } from "react-icons/gr";
import PrimaryBtn from "../Shared/Buttons/PrimaryBtn";
const Benifit = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 shadow-xl">
        <div>
          <img
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className=" p-4">
          <h5>BENEFITS</h5>
          <h1 className="text-4xl font-bold">
            Why Choose Overstock.com For Your Device?
          </h1>
          <p className="py-6">
            Authentic marketing is not the art of selling what you make but
            knowing what to make. It is the art of identifying and understanding
            customer needs and creating solutions that deliver satisfaction to
            the customers, profits to the producers and benefits for the
            stakeholders.
          </p>
          <div className="mb-3">
            <div className="flex items-center ">
              <GrStatusGood></GrStatusGood>
              <span className="ml-2">
                You cannot inspect quality into the product.it is already there.
              </span>
            </div>
            <div className="flex items-center ">
              <GrStatusGood></GrStatusGood>
              <span className="ml-2">
                The only way to advertise is by not focusing on the product.
              </span>
            </div>
            <div className="flex items-center ">
              <GrStatusGood></GrStatusGood>
              <span className="ml-2">
                You cannot inspect quality into the product; it is already
                there.
              </span>
            </div>
            <div className="flex items-center ">
              <GrStatusGood></GrStatusGood>
              <span className="ml-2">
                When the product is right, you don’t have to be a great
                Marketer.
              </span>
            </div>
            <div className="flex items-center ">
              <GrStatusGood></GrStatusGood>
              <span className="ml-2">
                Any product that needs a manual to work is broken.
              </span>
            </div>
          </div>
          <PrimaryBtn>Book Apoinment</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
