// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyEEK_vfhr94aKLSbkAk2FVbFLUvsBT50",
  authDomain: "reactprac-83594.firebaseapp.com",
  projectId: "reactprac-83594",
  storageBucket: "reactprac-83594.appspot.com",
  messagingSenderId: "835928787288",
  appId: "1:835928787288:web:d2da681517368d99cbbd2d",
  measurementId: "G-8Y1LTMXXYB"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();