import React, { createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";
import { auth, provider } from "../firebase";

export const AuthContext = createContext(null);

const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
        setDisplayName(user.displayName);
        setProfilePic(user.photoURL);
      } else {
        setUser(null);
      }
      setAuthChecked(true);
    });

    return unsubscribe;
  });

  const signInWithFacebook = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      // const user = result.user;
    } catch (error) {
      console.log("signInWithFacebook: ", error);
    } finally {
      setLoading(false);
    }
  };

  const signInAsGuest = async () => {
    setLoading(true);
    try {
      const result = await signInAnonymously(auth);
      const user = result.user;
      console.log("user: ", result);
    } catch (error) {
      console.log("signInAsGuest: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sucessfully singed out!");
      })
      .catch((error) => {
        console.log("Theres and error signing out: ", error);
      });
  };

  const contextvalue = {
    signInWithFacebook,
    signInAsGuest,
    handleSignOut,
    loading,
    user,
    authChecked,
    profilePic,
    displayName,
  };

  return (
    <AuthContext.Provider value={contextvalue}>{children}</AuthContext.Provider>
  );
};

export default AuthenticationContextProvider;
