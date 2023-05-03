import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';



const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  
  
  const location = useLocation()
  console.log('.....',location);

  if(user){
    return children
  }

  return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;