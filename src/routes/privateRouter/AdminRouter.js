import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../../page/Shared/Spinner/Spinner";

const AdminRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loader || adminLoading) {
    return <Spinner></Spinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRouter;
