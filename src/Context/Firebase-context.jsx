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
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

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
const Firestore = getFirestore();
const storage = getStorage();

export const FirebaseProvider = (props) => {
  const [User, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(User);
      else setUser(null);
    });
  }, []);
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const LoginUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signinWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider);
  };
  console.log(User);
  const HandleCreateNewListing = async (
    Name,
    isbnNumber,
    Price,
    coverPhoto
  ) => {
    const imageRef = ref(
      storage,
      `Uploads/images/${Date.now()}-${coverPhoto.Name}`
    );
    const uploadImage = await uploadBytes(imageRef, coverPhoto);
    await addDoc(collection(Firestore, 'Books'), {
      Name,
      isbnNumber,
      Price,
      imageURL: uploadImage.ref.fullPath,
      userId: User.uid,
      userEmail: User.email,
      displayName: User.displayName,
      photoURL: User.photoURL,
    });
  };

  const isLoggedIn = User ? true : false;
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        LoginUserWithEmailAndPassword,
        signinWithGoogle,
        HandleCreateNewListing,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
