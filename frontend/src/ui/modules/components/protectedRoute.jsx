import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const token = window.localStorage.getItem('auth_token');
export const ProtectedRoute = () => {
  return token !== 'null' ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
