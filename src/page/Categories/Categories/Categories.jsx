import { useQuery } from "@tanstack/react-query";
import React from "react";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  console.log(categories);
  return (
    <div>
      <h1 className="text-5xl uppercase text-center mb-6">categories</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 text-center">
        {categories?.map((categorie) => (
          <div className="border p-6" key={categorie?._id}>
            <h1 className="text-3xl">{categorie?.category_name}</h1>
            <button className="btn btn-sm my-3">see products</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
