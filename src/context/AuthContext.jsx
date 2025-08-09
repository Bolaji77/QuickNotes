import React, { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebaseconfig"

const AuthContext = createContext();
 export function useAuth(){
    return useContext(AuthContext)
 }

 export function AuthProvider({children}){//provider function provides all variable and functions
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //Sign up function
    async function signup(email, password) {
        setError('')
        try{
               return await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
                setError(err.message);
                throw err;
        }
    }
    //Login function
    async function login(email, password) {
        setError('')
        try{
               return await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
                setError(err.message);
                throw err;
        }
    }
    //Logout function
    async function logout() {
        setError('')
        try{
               return await signOut(auth);
        }catch(err){
                setError(err.message);
                throw err;
        }
    }
    //function to check if user is logged in or out
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
                setCurrentUser(user);
                setLoading(false);
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        loading,
        login,
        logout,
        error,
        signup
    }

    return(
        <AuthContext.Provider value={value}>
                {children}
        </AuthContext.Provider>
    )
 }