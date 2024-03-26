import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Roots from '../layout/Roots';
import NotFound from '../shared/NotFound';
import Home from '../Pages/Home/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default routes;