import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import loginLogo from "../../../assets/login.jpg";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const registerUser = (data) => {
    console.log(data);
  };
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <img src={loginLogo} alt="" className="w-full" />
      </div>
      <div className="hero">
        <div className="w-full">
          <form className="card-body" onSubmit={handleSubmit(registerUser)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="full name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload image</span>
              </label>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn ">Create Account</button>
            </div>
          </form>
          <div className=" mb-6 gap-2">
            <button className="btn  btn-sm mr-6 ml-8">Google Login</button>
            <Link to="/selleraccount">
              <button className="btn  btn-sm">Create Seller Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
