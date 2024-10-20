import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // actually this can be exposed but just in case lol
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "storyscape-439106.firebaseapp.com",
  projectId: "storyscape-439106",
  storageBucket: "storyscape-439106.appspot.com",
  messagingSenderId: "130904535807",
  appId: "1:130904535807:web:7f9de7f2b79ae8658a92ca",
  measurementId: "G-SGN1L9EYHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
