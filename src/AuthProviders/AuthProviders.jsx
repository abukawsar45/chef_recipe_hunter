import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
  // const [user,setUser] = useState('');
  // const [loading,setLoading] = useState('');


  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const user = {ma:'baba'}

  const authInfo = {
    user,
    signUpWithEmail,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;