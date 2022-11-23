import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
    }
])