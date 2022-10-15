// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoWnVIspmaEatOldk6UR_u482klPZ8JHk",
  authDomain: "danone-445e2.firebaseapp.com",
  projectId: "danone-445e2",
  storageBucket: "danone-445e2.appspot.com",
  messagingSenderId: "817321948178",
  appId: "1:817321948178:web:b35bc88a8c0b5cfb0d94cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;