import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, orderBy, query, collection, addDoc, serverTimestamp, deleteDoc, doc, setDoc } from "firebase/firestore";

export const UserContext = createContext(null);

const UsersContextProvider = ({ children }) => {
  const [newAccountUsers, setNewAccountUsers] = useState([]);

  useEffect(() => {
    const chatCollectionRef = collection(db, "users");
    const usersQuery = query(chatCollectionRef, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const updatedUsers = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNewAccountUsers(updatedUsers);
    });
    return unsubscribe;
  }, []);

  const addOnlineUser = async (displayName, isTyping, id) => {
    try {
      const usersCollectionRef = collection(db, "users");
      const userDocRef = doc(usersCollectionRef, id); 

      await setDoc(userDocRef, {
        displayName: displayName,
        isTyping: isTyping,
        uid: id,
        createdAt: serverTimestamp(),
      });

    } catch (error) {
      console.log("Error adding user: ", error);
    }
  };

  const deleteOnlineUser = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await deleteDoc(userDocRef);
    } catch (error) {
      console.log("Error deleting user: ", error);
    }
  };

  const contextValue = { newAccountUsers, addOnlineUser, deleteOnlineUser };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UsersContextProvider;
