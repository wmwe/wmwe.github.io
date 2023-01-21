// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5ycy5yNanO_xw4c5bX2apgZmxw-rztM",
  authDomain: "wmwe-website.firebaseapp.com",
  projectId: "wmwe-website",
  storageBucket: "wmwe-website.appspot.com",
  messagingSenderId: "886469531612",
  appId: "1:886469531612:web:709620fe1f7a5bf334e119",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
