import React, { createContext, useContext } from "react"
import { initializeApp } from "firebase/app"

const FirebaseContext = createContext(null)
const firebaseConfig = {
  apiKey: "AIzaSyBPRNjdtAUcoX-bulUMo2cgx9MvJm_Kyqw",
  authDomain: "bookify-edcd8.firebaseapp.com",
  projectId: "bookify-edcd8",
  storageBucket: "bookify-edcd8.appspot.com",
  messagingSenderId: "580502079952",
  appId: "1:580502079952:web:5e45eb9c8efe659b4951d5"
};
export const useFirebase = () => useContext(FirebaseContext)
const firebaseapp = initializeApp(firebaseConfig)

export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider >
      {props.children}
    </FirebaseContext.Provider>
  )
}