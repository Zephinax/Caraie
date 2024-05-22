import Home from './Home/Home';
import Category from './Category/Category';
import { RouteObject, Navigate } from 'react-router-dom';
const Routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '*', element: <Navigate to='/' /> },
  { path: '/Category', element: <Category /> },
];

export default Routes;
