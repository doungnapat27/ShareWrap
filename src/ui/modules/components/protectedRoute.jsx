import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const token = window.localStorage.getItem('auth_token');
const user = window.localStorage.getItem('auth_user');
export const ProtectedRoute = () => {
  return token !== 'null' && user !== 'null' ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
