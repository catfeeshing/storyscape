'use client'
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase"; // Adjust the import path as needed
import { title } from "@/components/primitives";

export default function InfoPage() {
  const [user, setUser] = useState(null);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setWords(userDoc.data().words || []);
        }
      } else {
        setUser(null);
        setWords([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (auth.currentUser) {
    return (
      <div>
        <h2>Welcome</h2>
        <h3>Your Words:</h3>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    );
  }
  else {
    return (
      <div>
        <p>Please sign in to view your shelf.</p>
      </div>
    )
  }

  // return (
    // <div>
    //   <h1 className={title()}>My Shelf</h1>
    //   {user ? (
    //     <div>
    //       <h2>Welcome</h2>
    //       <h3>Your Words:</h3>
    //       <ul>
    //         {words.map((word, index) => (
    //           <li key={index}>{word}</li>
    //         ))}
    //       </ul>
    //     </div>
        
    //   ) : (
    //     <div>
    //       <p>Please sign in to view your shelf.</p>
    //     </div>
    //   )}
    // </div>
  // );
}