import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';

const Sellers = () => {
    const { data, isLoading, refetch } = useQuery({
      queryKey: ["users/sellers"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/users/sellers");
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return <Spinner></Spinner>;
    }
    const deleteUser = (id, name) => {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`delete suceessfully ${name}`);
            refetch();
          }
        })
        .catch((error) => console.log(error));
    };
    return (
      <div className="overflow-x-auto w-full">
        <div className="grid grid-cols-3 text-center">
          <div className="border p-2">
            <h1>Users Info</h1>
          </div>
          <div className="border p-2">
            <h1>Position</h1>
          </div>
          <div className="border p-2">
            <h1>Admin Role</h1>
          </div>
        </div>

        {data?.map((user) => (
          <div
            className="grid grid-cols-2 lg:grid-cols-3 text-center my-3 shadow-lg"
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
            <div className="border p-2">
              {user?.role}
            </div>
            <div className="border p-2">
              <button
                className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400"
                onClick={() => deleteUser(user?._id,user?.name)}
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Sellers;