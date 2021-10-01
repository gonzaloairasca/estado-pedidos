import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTWnBnrXuG_N0oYrknkrJUUOluHa2YgNY",

  authDomain: "lista-de-tareas-44735.firebaseapp.com",

  projectId: "lista-de-tareas-44735",

  storageBucket: "lista-de-tareas-44735.appspot.com",

  messagingSenderId: "101943624110",

  appId: "1:101943624110:web:688c790b2db92fc77ac83f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
