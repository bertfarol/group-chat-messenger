import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { UserContext } from "./UsersContextProvider";

export const AuthContext = createContext(null);

const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [loading, setLoading] = useState(false);

  const { addOnlineUser, deleteOnlineUser } = useContext(UserContext);

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
  }, [auth]);

  const signInWithFacebook = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await addOnlineUser(user.displayName, false, user.uid);
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
      console.log("user: ", user);
    } catch (error) {
      console.log("signInAsGuest: ", error);
    } finally {
      setLoading(false);
    }
  };

  const addGuestName = async (guestName) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: guestName,
      });
      const user = auth.currentUser;
      if (user) {
        setDisplayName(user.displayName);
        addOnlineUser(user.displayName, false, user.uid);
      }
      console.log("Successfully added");
    } catch (error) {
      console.log("Guest add name error: ", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sucessfully singed out!");
        deleteOnlineUser(user);
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
    addGuestName,
  };

  return (
    <AuthContext.Provider value={contextvalue}>{children}</AuthContext.Provider>
  );
};

export default AuthenticationContextProvider;
