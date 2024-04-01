import { useAuth } from '@/routing/authProvider';
import React from 'react';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Your logout logic here
    logout();
  };

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
