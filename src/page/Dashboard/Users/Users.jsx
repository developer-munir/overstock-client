import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";

const Users = () => {
  const { data, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
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
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Users Info</th>
            <th>Position</th>
            <th>Admin Role</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr className="border" key={user?._id}>
              <td className="border">
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
              </td>
              <td className="border">
                {user?.role}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td className="border">
                {user?.role === "admin" ? (
                  <button className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400">
                    Remove Admin{" "}
                  </button>
                ) : (
                  <button
                    className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400"
                    onClick={() => handleMakeAdmin(user?._id)}
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
