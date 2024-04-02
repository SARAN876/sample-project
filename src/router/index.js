import { useRoutes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Sidebar from '../pages/sideBar';
import NotFound from '../pages/pageNotfund';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Sidebar />,
      children: [
        { element: <Navigate to="/dashboard" replace />, index: true },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'product', element: <Dashboard /> },
        { path: 'customers', element: <Dashboard /> },
        { path: 'income', element: <Dashboard /> },
        { path: 'promote', element: <Dashboard /> },
        { path: 'help', element: <Dashboard /> },
        { path: '*', element: <NotFound /> },
      ]
    },
  ]);
}
