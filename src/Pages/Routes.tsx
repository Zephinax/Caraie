import Home from './Home/Home';
import { RouteObject, Navigate } from 'react-router-dom';
const Routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '*', element: <Navigate to='/' /> }, // Assuming Home is a valid React component
];

export default Routes;
