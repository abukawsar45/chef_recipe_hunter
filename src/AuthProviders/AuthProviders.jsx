import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth'
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
  // const [user,setUser] = useState('');
  // const [loading,setLoading] = useState('');

  const googleProvider = new GoogleAuthProvider();

  const SignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const user = {ma:'baba'}

  const authInfo = {
    user,
    signUpWithEmail,
    SignInWithGoogle,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;