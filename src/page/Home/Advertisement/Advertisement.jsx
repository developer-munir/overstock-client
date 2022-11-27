import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
const Advertisement = () => {
  const {
    data: myProduct = [],

    refetch,
  } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise");
      const data = res.json();
      return data;
    },
  });
  refetch();
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {myProduct?.map((product) => (
          <div
            className="border shadow-lg rounded-sm text-center"
            key={product?._id}
          >
            <figure>
              <img src={product?.picture} alt="" className="h-[120px] w-full" />
            </figure>
            <Link to={`categories/${product?.category_name}`}>
              <button className=" uppercase my-6 bg-yellow-400 p-2 rounded-xl">
                Shop now
              </button>
              <div className="badge badge-secondary ml-2">NEW</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
