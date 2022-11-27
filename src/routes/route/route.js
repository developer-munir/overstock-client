import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../layouts/DashboardLayouts/DashboardLayouts";
import Main from "../../layouts/Main/Main";
import Login from "../../page/Authentication/Login/Login";
import Register from "../../page/Authentication/Register/Register";
import SellerAccount from "../../page/Authentication/SellerAccount/SellerAccount";
import CategoryProducts from "../../page/Categories/CategoryProducts/CategoryProducts";
import AddAProduct from "../../page/Dashboard/AddAProduct/AddAProduct";
import Buyers from "../../page/Dashboard/Buyers/Buyers";
import Dashboard from "../../page/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../page/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../page/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../page/Dashboard/ReportedItems/ReportedItems";
import Sellers from "../../page/Dashboard/Sellers/Sellers";
import Users from "../../page/Dashboard/Users/Users";
import Error from "../../page/Error/Error";
import Home from "../../page/Home/Home/Home";
import AdminRouter from "../privateRouter/AdminRouter";
import BuyerRouter from "../privateRouter/BuyerRouter";
import PrivateRouter from "../privateRouter/PrivateRouter";
import SellerRouter from "../privateRouter/SellerRouter";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/selleraccount",
        element: <SellerAccount></SellerAccount>,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRouter>
            <CategoryProducts></CategoryProducts>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRouter>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRouter>
            <Users></Users>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: (
          <AdminRouter>
            <Buyers></Buyers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdminRouter>
            <Sellers></Sellers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/reported",
        element: (
          <AdminRouter>
            <ReportedItems></ReportedItems>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <MyOrders></MyOrders>
          // <BuyerRouter>
          // </BuyerRouter>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <AddAProduct></AddAProduct>
          // <SellerRouter>
          // </SellerRouter>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <MyProducts></MyProducts>
          // <SellerRouter>
          // </SellerRouter>
        ),
      },
    ],
  },
]);
