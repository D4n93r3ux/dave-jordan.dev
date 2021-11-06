import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isLoading, user } = useAuthContext();

  return user ? (
    <Redirect to='/dashboard' />
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    <Route {...rest}>{children}</Route>
  );
};

export default ProtectedRoute;
