import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
export const Authcontext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoder ] = useState(true)
    console.log(user, loader)

    const createnewuser = (email, password)=>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userlogin = (email, password)=> {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoder(true)
        return signOut(auth)
    }

    const authinfo ={
        user,
        setUser,
        createnewuser,
        logout,
        userlogin,
        loader
    }

    useEffect(()=> {
       const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser)
            setLoder(false)
        })
        return()=>{
            unsubscribe()
        }
    }, )
    return (
        <Authcontext.Provider value={authinfo}>
           {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;