import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Spinner from "../../page/Shared/Spinner/Spinner";

const BuyerRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [buyerLoading, isBuyer] = useSeller(user?.email);
  const location = useLocation();
  if (loader || buyerLoading) {
    return <Spinner></Spinner>;
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default BuyerRouter;
