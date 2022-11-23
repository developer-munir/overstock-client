import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import loginLogo from '../../../assets/login.jpg';
import { AuthContext } from "../../../context/AuthContext/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const loginUserSubmit = (data) => {
      loginUser(data.email,data.password)
          .then(result => {
          console.log(result.user)
          })
          .catch(error => {
            console.error(error.message)
        })
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
                name='password'
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
              <button className="btn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
