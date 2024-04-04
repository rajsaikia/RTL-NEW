import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authProvider';

export const PrivateRoute = () => {
  const { authenticated } = useAuth();

  return authenticated ? <Outlet /> : <Navigate to='/home' replace />;
};
