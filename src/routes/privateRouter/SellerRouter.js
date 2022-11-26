import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Spinner from "../../page/Shared/Spinner/Spinner";

const SellerRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const [sellerLoading,isSeller] = useSeller(user?.email);
  const location = useLocation();
  if (loader || sellerLoading) {
    return <Spinner></Spinner>;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default SellerRouter;
