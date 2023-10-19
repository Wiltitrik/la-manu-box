// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCChuDfmUi7197ZbVX3L6nYD1sxNaWqJ6M",
  authDomain: "la-manu-box-9c40b.firebaseapp.com",
  projectId: "la-manu-box-9c40b",
  storageBucket: "la-manu-box-9c40b.appspot.com",
  messagingSenderId: "846886419350",
  appId: "1:846886419350:web:509d28ab9fe1d9af3f7bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
