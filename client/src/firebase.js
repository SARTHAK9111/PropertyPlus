// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-realstate-project-45da5.firebaseapp.com",
  projectId: "mern-realstate-project-45da5",
  storageBucket: "mern-realstate-project-45da5.appspot.com",
  messagingSenderId: "575919717111",
  appId: "1:575919717111:web:b7b0729d15f37c61da71f2",
  measurementId: "G-FQJW5HBH4X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
