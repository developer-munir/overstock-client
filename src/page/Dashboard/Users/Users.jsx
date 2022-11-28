import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Users = () => {
  const { data, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("https://y-gamma-two.vercel.app/users", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`https://y-gamma-two.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Got adminship successfully");
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };
  const handleVerifyUser = (id) => {
    fetch(`https://y-developer-munir.vercel.app/users/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("verifed successfully");
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="overflow-x-auto w-full">
      <div className="grid grid-cols-4 text-center">
        <div className="border p-2">
          <h1>Users Info</h1>
        </div>
        <div className="border p-2">
          <h1>Position</h1>
        </div>
        <div className="border p-2">
          <h1>Admin Role</h1>
        </div>
        <div className="border p-2">
          <h1>Admin Role</h1>
        </div>
      </div>

      {data?.map((user) => (
        <div
          className="grid grid-cols-2 lg:grid-cols-4 text-center my-3 shadow-lg"
          key={user?._id}
        >
          <div className="border p-2">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={user?.image} alt="" />
                </div>
              </div>
              <div>
                <div className="font-bold">{user?.name}</div>
                <div className="text-sm opacity-50">{user?.email}</div>
              </div>
            </div>
          </div>
          <div className="border p-2">{user?.role}</div>
          <div className="border p-2">
            {user?.role === "admin" ? (
              ""
            ) : (
              <button
                className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400"
                onClick={() => handleMakeAdmin(user?._id)}
              >
                Make Admin
              </button>
            )}
          </div>
          <div className="border p-2">
            {user?.isVerifyed === "verifyed" ? (
              <button className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400">
                Verifyed
              </button>
            ) : (
              <button
                className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400"
                onClick={() => handleVerifyUser(user?._id)}
              >
                Verify User
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
