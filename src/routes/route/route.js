import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../layouts/DashboardLayouts/DashboardLayouts";
import Main from "../../layouts/Main/Main";
import Login from "../../page/Authentication/Login/Login";
import Register from "../../page/Authentication/Register/Register";
import SellerAccount from "../../page/Authentication/SellerAccount/SellerAccount";
import CategoryProducts from "../../page/Categories/CategoryProducts/CategoryProducts";
import Dashboard from "../../page/Dashboard/Dashboard/Dashboard";
import Error from "../../page/Error/Error";
import Home from "../../page/Home/Home/Home";
import PrivateRouter from "../privateRouter/PrivateRouter";


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
    element: <DashboardLayouts></DashboardLayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);