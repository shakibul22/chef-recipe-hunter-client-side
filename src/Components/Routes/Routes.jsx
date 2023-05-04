/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import RecipeDetailsLayout from "../Layouts/RecipeDetailsLayout/RecipeDetailsLayout";
import ChefRecipe from "../ChefRecipe/ChefRecipe";


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
        path: "recipeData",
        element: <RecipeDetailsLayout></RecipeDetailsLayout>,
        children: [
            {
                path: "/recipeData",
                element: <ChefRecipe></ChefRecipe>,
            },
            {
                path: ":id",
                element: (
                    <PrivateRoute>
                        <Details></Details>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;