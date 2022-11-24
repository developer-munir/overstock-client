import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import loginLogo from "../../../assets/login.jpg";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
const SellerAccount = () => {
  const { singUpUser, updateUserProfile } = useContext(AuthContext);
  const [userImg, setUserImg] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const registerSellerAccount = (data) => {
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);
    fetch(
      `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_ImgBB_Key}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUserImg(data.data?.image?.url);
      })
      .catch((error) => {
        console.log(error);
      });
    const updatedUserInfo = {
      displayName: data.name,
      photoURL: userImg,
    };
    singUpUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(updatedUserInfo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
        toast.success("Register Successfull");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <img src={loginLogo} alt="" className="w-full" />
      </div>
      <div className="w-full">
        <form
          className="card-body"
          onSubmit={handleSubmit(registerSellerAccount)}
        >
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
              {...register("image")}
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
              required
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
            <button className="btn">Create Seller Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerAccount;
