import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../../page/Dashboard/DashboardNavbar/DashboardNavbar";
import Footer from "../../page/Shared/Footer/Footer";

const DashboardLayouts = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-4">
          <DashboardNavbar></DashboardNavbar>
          <div className="min-h-screen my-3">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-[#03203C] text-[#CAD5E2]">
            <li>
              <Link to="/dashboard">All sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/addaproduct">Add a product</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
