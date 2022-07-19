// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBI5ycy5yNanO_xw4c5bX2apgZmxw-rztM",
    authDomain: "wmwe-website.firebaseapp.com",
    projectId: "wmwe-website",
    storageBucket: "wmwe-website.appspot.com",
    messagingSenderId: "886469531612",
    appId: "1:886469531612:web:c233cfd4de92ef2234e119"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const fire = firebaseApp.firestore();

  export default firebaseApp;