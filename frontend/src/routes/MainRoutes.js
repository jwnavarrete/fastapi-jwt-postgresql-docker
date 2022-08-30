import { lazy } from 'react';

// project imports
import MainLayout from '@layout/MainLayout';
import Loadable from '@ui-component/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('@views/dashboard')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('@views/pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;