import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authProvider';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  console.log(isLoggedIn)

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
