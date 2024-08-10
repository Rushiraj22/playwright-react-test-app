// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return children;
}

export default ProtectedRoute;
