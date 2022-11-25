import React from "react";
import { GrStatusGood } from "react-icons/gr";
const Benifit = () => {
  return (
    <div>
      <div className=" grid grid-cols-2">
        <div>
          <img
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
            alt=""
          />
        </div>

        <div className="bg-[#CAD5E2] color-my p-4">
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
          <div>
                      <span>
                          <Benifit></Benifit>
              Lorem ipsum Dolor sit amet consectur 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
