import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { isLoading, user } = useAuthContext();

  return user ? (
    <Navigate to='/dashboard' />
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
