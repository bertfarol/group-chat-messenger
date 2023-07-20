import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  onSnapshot,
  orderBy,
  query,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const ChatContext = createContext(null);

const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const chatCollectionRef = collection(db, "messages");
    const messagesQuery = query(
      chatCollectionRef,
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(updatedMessages);
    });
    return unsubscribe;
  }, []);

  const createMessage = async (newMessage, userName) => {
    try {
      const messagesCollectionRef = collection(db, "messages");
      await addDoc(messagesCollectionRef, {
        user: userName,
        message: newMessage,
        createdAt: serverTimestamp(),
      });
    } catch {
      console.log("error");
    }
  };

  const contextValue = {
    messages,
    createMessage,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContextProvider;
