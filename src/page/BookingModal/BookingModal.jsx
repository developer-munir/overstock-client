import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const BookingModal = ({ title }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const registerUser = (data) => {
    const number = data.number;
    const location = data.location;
    const bookingInfo = {
      email: user.email,
      name: user.displayName,
      itemName: title,
      number,
      location,
    };
    console.log(bookingInfo);
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
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      {...register("itemname")}
                      type="text"
                      name="itemname"
                      placeholder={title}
                      readOnly
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    placeholder={user?.email}
                    readOnly
                    className="input input-bordered"
                  />
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
                  <input
                    type="submit"
                    value="Submit"
                    className="text-color-my bg-color-my py-3 px-6 font-semibold hover:bg-red-400"
                  />
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
