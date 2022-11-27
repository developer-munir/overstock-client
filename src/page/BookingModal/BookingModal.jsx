import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const BookingModal = ({ title, price,picture }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const registerUser = (data) => {
    const number = data.number;
    const location = data.location;
    const bookingInfo = {
      email: user.email,
      name: user.displayName,
      price,
      itemName: title,
      number,
      picture,
      title,
      location,
    };
    fetch("http://localhost:5000/bookings", {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Successfully");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box overflow-hidden rounded-none">
          <div className="hero">
            <div className="w-full">
              <form className="card-body" onSubmit={handleSubmit(registerUser)}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder={user?.displayName}
                      readOnly
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="itemname"
                      placeholder={user?.email}
                      readOnly
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={title}
                      readOnly
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={price}
                      readOnly
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    {...register("number")}
                    type="number"
                    name="number"
                    placeholder="number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Meeting Location</span>
                  </label>
                  <input
                    {...register("location")}
                    type="text"
                    name="location"
                    placeholder="location"
                    className="input input-bordered"
                  />
                </div>
                <div className="modal-action">
                  <button type="sumbit">
                    <label
                      htmlFor="booking-modal"
                      className="text-color-my bg-color-my py-3 px-6 font-semibold hover:bg-red-400"
                    >

                    Submit
                    </label>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
