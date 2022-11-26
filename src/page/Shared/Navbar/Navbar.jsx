import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import Footer from "../Footer/Footer";
import { AiOutlineLaptop } from "react-icons/ai";
const Navbar = () => {
    const { user,logOutUser } = useContext(AuthContext);
    const singout = () => {
        logOutUser()
        .then(()=>{})
        .catch(error => console.log(error))
    }
  const navlinks = (
    <>
      <li className="hover:bg-red-400 hover:text-[#CAD5E2]">
        <Link to="/">Home</Link>
      </li>

      {user?.uid ? (
        <>
          <li className="hover:bg-red-400 hover:text-[#CAD5E2]">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:bg-red-400 hover:text-[#CAD5E2]">
            <Link onClick={singout}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li className="hover:bg-red-400 hover:text-[#CAD5E2]">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:bg-red-400 hover:text-[#CAD5E2]">
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <div className="w-full navbar shadow-2xl py-16">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 ">
            <AiOutlineLaptop className="text-5xl"></AiOutlineLaptop>
            <span className="text-3xl title-nav">Overstock.com</span>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal ">{navlinks}</ul>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-square btn-ghost   lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
