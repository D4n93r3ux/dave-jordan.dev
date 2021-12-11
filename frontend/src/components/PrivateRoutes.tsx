import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { isLoading, user } = useAuthContext();

  return isLoading ? (
    <div>Loading...</div>
  ) : !user ? (
    <Navigate to='/login' />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
