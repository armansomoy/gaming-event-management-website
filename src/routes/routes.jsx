import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import NotFound from "../shared/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("/news.json"),
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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
