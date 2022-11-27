import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryProducts = () => {
  const products = useLoaderData();
  console.log(products)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <CategoryCard product={product} key={product._id}></CategoryCard>
      ))}
    </div>
  );
};

export default CategoryProducts;
