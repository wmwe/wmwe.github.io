// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjJcHuKJ2qSmOHwhnHDaqhRa9b6Ogr1WU",
  authDomain: "wmwe-website-users.firebaseapp.com",
  projectId: "wmwe-website-users",
  storageBucket: "wmwe-website-users.appspot.com",
  messagingSenderId: "855542964294",
  appId: "1:855542964294:web:443d5028ec653d8e60ea47",
  measurementId: "G-CNBEH9082P"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app2);

export const auth2 = getAuth(app2);
export const db2 = getFirestore(app2);
export default app2;