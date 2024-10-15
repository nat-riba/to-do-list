import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB6Lkr-NbqYQnSKJgsbsy3RAG_XczSMg8",
  authDomain: "to-do-list-904ed.firebaseapp.com",
  projectId: "to-do-list-904ed",
  storageBucket: "to-do-list-904ed.appspot.com",
  messagingSenderId: "680748958928",
  appId: "1:680748958928:web:98adc4bbb627d038dfcad5"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);