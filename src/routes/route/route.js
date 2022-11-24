import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../../layouts/DashboardLayouts/DashboardLayouts";
import Main from "../../layouts/Main/Main";
import Login from "../../page/Authentication/Login/Login";
import Register from "../../page/Authentication/Register/Register";
import SellerAccount from "../../page/Authentication/SellerAccount/SellerAccount";
import Dashboard from "../../page/Dashboard/Dashboard/Dashboard";
import Error from "../../page/Error/Error";
import Home from "../../page/Home/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/selleraccount',
                element:<SellerAccount></SellerAccount>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayouts></DashboardLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])