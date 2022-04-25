// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxegHIwEM1mqPzsjb_6mVTo4mSywrsSVU",
  authDomain: "genius-car-services2-2539b.firebaseapp.com",
  projectId: "genius-car-services2-2539b",
  storageBucket: "genius-car-services2-2539b.appspot.com",
  messagingSenderId: "556662329494",
  appId: "1:556662329494:web:ea237d16e4dbae71b1f2b7",
  measurementId: "G-N44S5KS9WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;