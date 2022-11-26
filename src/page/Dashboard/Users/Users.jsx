import { useQuery } from "@tanstack/react-query";
import React from "react";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";

const Users = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
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
            <tr className="border">
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
                      <PrimaryBtn>Make Admin</PrimaryBtn>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
