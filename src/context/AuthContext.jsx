import React, { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../firebaseconfig"

const AuthContext = createContext();
 export function useAuth(){
    return useContext(AuthContext)
 }
 export function AuthProvider({children}){
    
 }