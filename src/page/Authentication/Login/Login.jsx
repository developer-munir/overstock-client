import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import loginLogo from "../../../assets/login.jpg";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const loginUserSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        getAccessToken(data.email);
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  const getAccessToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          toast.success("login successfully");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <img src={loginLogo} alt="" className="w-full" />
      </div>
      <div className="hero">
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
      </div>
    </div>
  );
};

export default Login;
