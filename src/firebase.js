import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRbKCRJaV_kvtddyVywFbuoO2kavrRVlw",
  authDomain: "capstone-36074.firebaseapp.com",
  projectId: "capstone-36074",
  storageBucket: "capstone-36074.appspot.com",
  messagingSenderId: "534595563766",
  appId: "1:534595563766:web:051b9ff13facf6c5753cd7",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
