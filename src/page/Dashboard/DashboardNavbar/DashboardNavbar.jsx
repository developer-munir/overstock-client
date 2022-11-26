import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext/AuthProvider';

const DashboardNavbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const singout = () => {
      logOutUser()
        .then(() => {})
        .catch((error) => console.log(error));
    };
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
      <div className="navbar">
        <div className="flex-1">
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
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {navlinks}
          </ul>
        </div>
      </div>
    );
};

export default DashboardNavbar;