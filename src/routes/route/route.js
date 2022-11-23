import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Login from "../../page/Authentication/Login/Login";
import Register from "../../page/Authentication/Register/Register";
import Home from "../../page/Home/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        ]
    }
])