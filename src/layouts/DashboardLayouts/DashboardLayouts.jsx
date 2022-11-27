import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";
import DashboardNavbar from "../../page/Dashboard/DashboardNavbar/DashboardNavbar";
import Footer from "../../page/Shared/Footer/Footer";

const DashboardLayouts = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  console.log(isBuyer);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:px-4">
          <DashboardNavbar></DashboardNavbar>
          <div className="min-h-screen p-2 lg:p-8">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-[#03203C] text-[#CAD5E2]">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/buyers">Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/sellers">Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reported">Reported Items</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorders">My orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
