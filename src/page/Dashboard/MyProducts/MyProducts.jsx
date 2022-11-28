import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myProduct = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products/myproducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://y-gamma-two.vercel.app/products/myproducts/${user?.displayName}`
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const deleteMyProduct = (id) => {
    fetch(`https://y-gamma-two.vercel.app/products/myproducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("delete successfully");
        refetch();
      })
      .catch((error) => console.error(error));
  };
  const handleAdvertise = (itmes) => {
    const itemsInfo = {
      picture: itmes?.picture,
      category_name: itmes?.category_name,
      sellerName: itmes?.Seller_name,
    };
    fetch("https://y-gamma-two.vercel.app/products/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Advertise successfully");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 className="text-3xl uppercase text-center border-b py-3 mb-3">
        My product
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {myProduct?.map((product) => (
          <div className="border shadow-lg rounded-sm" key={product?._id}>
            <figure>
              <img src={product?.picture} alt="" className="h-[100px] w-full" />
            </figure>
            <div className="text-sm p-2">
              <h1>Status: Sold</h1>
              <h3>Price : ${product?.buying_price}</h3>
              <div className="my-3 flex justify-between items-center">
                <button
                  className="bg-red-800 text-white px-2 py- rounded-lg"
                  onClick={() => deleteMyProduct(product?._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-red-800 text-white px-2 py- rounded-lg"
                  onClick={() => handleAdvertise(product)}
                >
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
