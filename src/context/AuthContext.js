import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../Firebase";
import React, { Component } from "react";
import { setDoc, doc } from "firebase/firestore"; // Import setDoc and doc from the Firestore SDK

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [user, setUser] = useState({});

  const createUserWithProfile = async (email, password, name, linkedin, currentTeam, memberSince) => {
    try {
      // create user in Firebase auth
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      // create user object with name, uid, linkedin, currentTeam, and memberSince
      const userObj = { 
        name, 
        uid: user.uid, 
        linkedin,
        currentTeam,
        memberSince 
      };
      console.log("User object:", userObj);
  
      // add user object to users collection in Firestore
      await setDoc(doc(db, "users", user.uid), userObj);
      console.log("User added to Firestore");
  
      console.log("User created:", userObj);
    } catch (error) {
      console.log(error);
    }
  };  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "https://localhost:3000/login",
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, createUserWithProfile, user, logout, signIn, forgotPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};