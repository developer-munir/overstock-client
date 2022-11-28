import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import loginLogo from "../../../assets/login.jpg";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const { loginUser, googleUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);
  if (token) {
    toast.success("Login Successfull");
    navigate(from, { replace: true });
  }
  const loginUserSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        getAccessToken(data.email);
        setUserEmail(data.email);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  const getAccessToken = (email) => {
    fetch(`https://y-gamma-two.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
        }
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    googleUser(provider)
      .then((result) => {
        const user = result.user;
        setUserEmail(user?.email);
      })
      .catch((error) => toast.error(error));
  };
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <img src={loginLogo} alt="" className="w-full" />
      </div>
      <div>
        <form className=" w-full" onSubmit={handleSubmit(loginUserSubmit)}>
          <div className="card-body">
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-[#03203C] text-color-my py-3">Login</button>
            </div>
          </div>
        </form>
        <button
          className="bg-[#03203C] text-color-my py-3 px-6 mr-6 ml-8"
          onClick={handleGoogleLogin}
        >
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Login;
