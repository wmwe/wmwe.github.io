import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBI5ycy5yNanO_xw4c5bX2apgZmxw-rztM",
  authDomain: "wmwe-website.firebaseapp.com",
  projectId: "wmwe-website",
  storageBucket: "wmwe-website.appspot.com",
  messagingSenderId: "886469531612",
  appId: "1:886469531612:web:709620fe1f7a5bf334e119",
});

var db = firebaseApp.firestore();

export { db };