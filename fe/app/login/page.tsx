"use client";
import { title } from "@/components/primitives";
import { auth } from "@/firebase/firebase"
import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth"

export default function PricingPage() {

  const googleAuth = new GoogleAuthProvider();
  const login = async() =>{
    const result=await signInWithPopup(auth, googleAuth);
  }

  return (
    <div>
      <h1 className={title()}>Login</h1>

      {/* button */}
      <p></p>
      <button onClick={login}>Sign in with Google</button>
    </div>
  );
}
