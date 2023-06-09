import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <progress
        className='progress progress-success w-56'
        value='10'
        max='100'
      ></progress>
    );
  }

  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoutes;
