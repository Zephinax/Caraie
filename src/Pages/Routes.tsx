import Home from './Home/Home';
import Category from './Category/Category';
import CarDetail from './CarDetail/CarDetail';
import { RouteObject, Navigate } from 'react-router-dom';
const Routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '*', element: <Navigate to='/' /> },
  { path: '/detail/:CarId', element: <CarDetail /> },
  { path: '/category', element: <Category /> },
];

export default Routes;
