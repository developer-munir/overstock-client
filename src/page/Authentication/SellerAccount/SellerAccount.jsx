import React from 'react';
import { Link } from 'react-router-dom';

import loginLogo from "../../../assets/login.jpg";
const SellerAccount = () => {
    return (
      <div className="grid md:grid-cols-2">
        <div>
          <img src={loginLogo} alt="" className="w-full" />
        </div>
        <div className="w-full">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
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