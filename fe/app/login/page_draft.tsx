import { title } from "@/components/primitives";
// import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import {
//   signInWithPopup,
//   getAdditionalUserInfo,
//   signOut,
//   UserCredential,
//   AdditionalUserInfo,
//   signInWithRedirect,
// } from "firebase/auth";

const auth = getAuth();

// const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Login</h1>

      {/* <button onClick={() => signInWithPopup(auth, googleProvider)}>Sign in with Google</button> */}

      

    </div>
  );
}
