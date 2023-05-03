import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const user = true;
  

  if(user){
    return children
  }

  return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;