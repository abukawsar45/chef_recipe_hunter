import React, { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
  const [user,setUser] = useState('');
  const [loading,setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const SignInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser)
      setLoading(false);
    })
    return () => {
      unSubscribe()
    }
  }, []);

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {

      displayName: name,
      photoURL: photoUrl,
    });
  };
  // const updateUser = (name, photoLink) => {
  //  return updateProfile(name, photoLink);
  // };

  const logOut = () => {
    return signOut(auth)
  };



  const authInfo = {
    user,
    loading,
    updateUserProfile,
    signUpWithEmail,
    SignInWithGoogle,
    signInWithGithub,
    loginWithEmailAndPassword,
    logOut,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;