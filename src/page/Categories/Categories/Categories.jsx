import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import SingleCategory from "./SingleCategory";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://y-gamma-two.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="md:px-12 px-2">
      <h1 className="text-3xl  uppercase text-[#03203C]  mb-6">
        All categories
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-center ">
        {categories?.map((categorie) => (
          <SingleCategory
            key={categorie?._id}
            categorie={categorie}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
