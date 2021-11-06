import React from 'react';
import { useAuthContext } from '../context/AuthContext';

interface Props {}

const Dashboard = (props: Props) => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello {user?.email}</p>
    </div>
  );
};

export default Dashboard;
