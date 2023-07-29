// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "techiza-46bc4.firebaseapp.com",
  projectId: "techiza-46bc4",
  storageBucket: "techiza-46bc4.appspot.com",
  messagingSenderId: "412537623809",
  appId: "1:412537623809:web:bca31b9c11e2eebc7ab700",
  measurementId: "G-D06NR2TNCK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
