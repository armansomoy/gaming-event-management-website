import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import NotFound from "../shared/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
