// import React, { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";
// import useAdmin from "../../hooks/useAdmin";

// const dashBoardRouter = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin(user?.email);
//   const location = useLocation();
//   if (loading || isAdminLoading) {
//     return <span>Loading...</span>;
//   }
//   if (user && isAdmin) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }}></Navigate>;
// };

// export default dashBoardRouter;
