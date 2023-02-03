import { lazy } from "react";

import Loadable from "../components/Loadable";
import MainLayout from "../Layouts/MainLayout";

const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
const One = Loadable(lazy(() => import('../pages/dashboard/One')));
const Two = Loadable(lazy(() => import('../pages/dashboard/Two')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: 'one',
            element: <One />
        },
        {
            path: 'two',
            element: <Two />
        }
    ]
}

export default MainRoutes;