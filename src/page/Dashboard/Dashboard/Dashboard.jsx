import React from "react";
import banner from '../../../assets/banner.jpg';

const Dashboard = () => {
  return (
    <div>
      <div className=" text-center">
        <div className="mt-[10%]">
          <h1 className="text-2xl md:text-6xl my-2">
            Overstock - Fashion Store Resle Laptops
          </h1>
          <p className="text-[13px] md:text-lg mb-6">
            If you are planning to buy a fresh used laptop then Overstock –
            Fashion Store is what you need.
          </p>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
