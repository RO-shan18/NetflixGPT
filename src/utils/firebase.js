// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcN50iiin7UVORpbMEwH4S4U62eFY6GZM",
  authDomain: "netflixgpt-4ace7.firebaseapp.com",
  projectId: "netflixgpt-4ace7",
  storageBucket: "netflixgpt-4ace7.appspot.com",
  messagingSenderId: "235955927652",
  appId: "1:235955927652:web:e736b5acb7065897093d71",
  measurementId: "G-4G2RSET7YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();