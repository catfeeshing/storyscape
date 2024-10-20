'use client'
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase"; // Adjust the import path as needed

export default function InfoPage() {
  const [user, setUser] = useState(null);
  interface Word {
    word: string;
    definition: string;
  }

  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // setUser(user);
        const userRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const words = userDoc.data().words || [];
          const definitions = userDoc.data().definitions || [];
          // Combine words and definitions into an array of objects
          const wordsWithDefinitions = words.map((word: any, index: number) => ({
            word,
            definition: definitions[index] || ""
          }));
          setWords(wordsWithDefinitions);
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
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-2xl font-semibold text-gray-700">Loading...</div>
    </div>;
  }

  if (auth.currentUser) {
    return (
      <div className="container mx-auto p-3">
        <h2 className="text-4xl font-bold text-center text-slate-600 mb-8">Your Shelf</h2>
        <div className="overflow-y-auto max-h-120">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-pink-200 text-slate">
              <tr>
                <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm">Word</th>
                <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm">Definition</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {words.map((item, index) => (
                <tr key={index} className="bg-gray-100 border-b border-gray-200">
                  <td className="w-1/2 py-3 px-4">{item.word}</td>
                  <td className="w-1/2 py-3 px-4">{item.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-4">Sign in to view your shelf</p>
          <p className="text-lg text-gray-600">or create an account to start saving your words!</p>
        </div>
      </div>
    );
  }
}