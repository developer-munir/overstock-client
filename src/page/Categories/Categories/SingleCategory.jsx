import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";

import { AiOutlineLaptop } from "react-icons/ai";

const SingleCategory = ({ categorie }) => {
  return (
    <div className=" h-[300px] shadow-x bg-[#CAD5E2] p-4 color-my">
      <div className="text-2xl color-my mb-3 border-b border-b-[#383CC1] py-3 flex justify-center items-center">
        <span>
          <AiOutlineLaptop></AiOutlineLaptop>
        </span>
        <span className="ml-3">{categorie?.category_name}</span>
      </div>
      <p className="mb-3 text-zinc-500">{categorie?.details}</p>
      <Link to={`/categories/${categorie?.category_id}`}>
        <PrimaryBtn>See Products</PrimaryBtn>
      </Link>
    </div>
  );
};

export default SingleCategory;
