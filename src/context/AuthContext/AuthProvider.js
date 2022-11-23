import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    
    const userInfo = {};
    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;