import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// import firebase from "firebase/compat/app";

const firebaseConfig = {

  apiKey: "AIzaSyBO7ci-zAo_MNFMlvrGHh5U1O9Gj8dHPkA",

  authDomain: "storyscape-439106.firebaseapp.com",

  projectId: "storyscape-439106",

  storageBucket: "storyscape-439106.appspot.com",

  messagingSenderId: "130904535807",

  appId: "1:130904535807:web:7f9de7f2b79ae8658a92ca",

  measurementId: "G-SGN1L9EYHS"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
// export const serverStamp = firebase.firestore.Timestamp