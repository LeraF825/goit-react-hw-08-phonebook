import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelector';

const PublicRoute = ({ children }) => {
  const authToken = useSelector(getToken);
  console.log('authToken', authToken);
  if (authToken) {
    return <Navigate to="/contacts" />;
  }
  return children;
};

export default PublicRoute;