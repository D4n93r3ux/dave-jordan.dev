import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isLoading, user } = useAuthContext();

  return isLoading ? (
    <div>Loading...</div>
  ) : !user ? (
    <Redirect to='/login' />
  ) : (
    <Route {...rest}>{children}</Route>
  );
};

export default PrivateRoute;
