import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD049XGgb_XXjxPOwUCze7EjMPHssq_yj8",
  authDomain: "group-chat-2023.firebaseapp.com",
  projectId: "group-chat-2023",
  storageBucket: "group-chat-2023.appspot.com",
  messagingSenderId: "165314575932",
  appId: "1:165314575932:web:33ddc50a5d18eadb3f0d39",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);