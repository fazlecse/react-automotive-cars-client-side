import { createContext, useState } from "react";
export const AuthContext = createContext(null);
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user, setUser]=useState(null);
// create user
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}




    const AuthInfo={
    user,
    createUser
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;