import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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
  
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    return signInWithPopup(auth,githubProvider)
  }


  const user = {ma:'baba'}

  const authInfo = {
    user,
    signUpWithEmail,
    SignInWithGoogle,
    signInWithGithub,
    loginWithEmailAndPassword,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;