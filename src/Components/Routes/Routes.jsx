/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Register from "../Register/Register";
import DetailsLayout from "../Layouts/DetailsLayout/DetailsLayout";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ],
    },

    {
        path: "Details",
        element: <DetailsLayout></DetailsLayout>,
        children: [
            {
                path: "/Details",
                element: <Details></Details>,
            },
            {
                path: ":id",
                element: (
                    <PrivateRoute>
                        <DetailsLayout></DetailsLayout>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;