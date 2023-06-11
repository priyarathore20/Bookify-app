import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: 'AIzaSyBPRNjdtAUcoX-bulUMo2cgx9MvJm_Kyqw',
  authDomain: 'bookify-edcd8.firebaseapp.com',
  projectId: 'bookify-edcd8',
  storageBucket: 'bookify-edcd8.appspot.com',
  messagingSenderId: '580502079952',
  appId: '1:580502079952:web:5e45eb9c8efe659b4951d5',
};
export const useFirebase = () => useContext(FirebaseContext);
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const GoogleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [User, setUser] = useState(null);
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const LoginUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signinWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(User);
      else setUser(null);
    });
  }, []);
  const isLoggedIn = User ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        LoginUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
