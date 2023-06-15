import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelector';

export const PrivateRoute = ({ children }) => {
  const authToken = useSelector(getToken);
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;