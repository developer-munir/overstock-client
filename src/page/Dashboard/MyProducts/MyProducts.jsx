import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";

/* 
On the "My Products" page, display sales status (available or sold), price, and any other relevant information you want to show. A seller will be able to delete any of his/her product. Please note there will be a special button for each unsold/available product where the seller can hit the button to advertise.
*/
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: myProduct = [], isLoading } = useQuery({
    queryKey: ["products/myproducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/myproducts/${user?.displayName}`
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h1 className="text-3xl uppercase text-center border-b py-3 mb-3">
        My product
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {myProduct?.map((product) => (
          <div className="border shadow-lg rounded-sm">
            <figure>
              <img src={product?.picture} alt="" className="h-[100px] w-full" />
            </figure>
            <div className="text-sm p-2">
              <h1>Status: Sold</h1>
              <h3>Price : 500</h3>
              <div className="my-3 flex justify-between items-center">
                <button className="bg-red-800 text-white px-2 py- rounded-lg">
                  Delete
                </button>
                <button className="bg-red-800 text-white px-2 py- rounded-lg">
                  Advertise
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
