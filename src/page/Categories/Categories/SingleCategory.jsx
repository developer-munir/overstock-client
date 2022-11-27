import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";

import { AiOutlineLaptop } from "react-icons/ai";
const SingleCategory = ({ categorie }) => {
  return (
    <div>
      <div className=" h-[300px] shadow-xl p-4 border bg-[#03203C] text-color-my">
        <div className="text-2xl mb-3 border-b  py-3 flex justify-center items-center ">
          <span>
            <AiOutlineLaptop></AiOutlineLaptop>
          </span>
          <span className="ml-3">{categorie?.category_name}</span>
        </div>
        <p className="mb-3 text-color-my">{categorie?.details}</p>
        <Link to={`/categories/${categorie?.category_name}`}>
          <PrimaryBtn>See Products</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
