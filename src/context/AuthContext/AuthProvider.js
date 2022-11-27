import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    console.log(user);
    const [loader, setLoader] = useState(true);
    const singUpUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (updatedDetails) => {
        setLoader(true)
       return updateProfile(auth.currentUser,updatedDetails)
    }
    const logOutUser = () => {
        setLoader(true)
        return signOut(auth);
    }
    const googleUser = provider => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe();
    },[])
    const userInfo = {
      singUpUser,
      loginUser,
      user,
      loader,
      updateUserProfile,
      logOutUser,
      googleUser,
    };
    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;